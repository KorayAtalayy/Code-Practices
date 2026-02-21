import speech_recognition as sr
import win32com.client
import re
from difflib import get_close_matches  # Put this at the top of your script

commands = {
    "cabin": 2,
    "cockpit": 3,
    "vip": 4,
    "economy": 5,
    "business": 6,
}
trigger_word = "slide"

# This part connects with Powerpoint
try:
    powerpoint = win32com.client.Dispatch("PowerPoint.Application")
    if powerpoint.Presentations.Count == 0:
        print("⚠️ No PowerPoint presentation is open.")
        exit()
    presentation = powerpoint.Presentations(1)
except Exception as e:
    print("❌ PowerPoint not found or not running.")
    print(f"Error: {e}")
    exit()

# Setup microphone
recognizer = sr.Recognizer()
mic = sr.Microphone()

print("🎤 Say a command...")

while True:
    with mic as source:
        recognizer.adjust_for_ambient_noise(source)
        print("Listening...")
        audio = recognizer.listen(source)
    
    try:
        voice_input = recognizer.recognize_google(audio).lower()
        print(f"You said: {voice_input}")

        if not voice_input.startswith(trigger_word):
            print("🛑 Trigger word not detected. Ignoring input.")
            continue

        voice_input = voice_input[len(trigger_word):].strip()

        if voice_input in ["exit", "quit", "stop", "close", "leave"]:
            print("👋 Exiting slideshow and closing PowerPoint...")
            try:
                presentation.SlideShowWindow.View.Exit()
            except:
                pass  # Slideshow might not be running
            powerpoint.Quit()
            break

        # Inside your while loop:
        matched = get_close_matches(voice_input, commands.keys(), n=1, cutoff=0.6)

        if matched:
            command = matched[0]  # ✅ THIS LINE MUST BE INDENTED
            slide = commands[command]
            try:
                presentation.SlideShowWindow.View.GotoSlide(slide)
                print(f"✅ Jumped to slide {slide}")
            except AttributeError:
                print("❌ Slideshow not running. Please start the slideshow first.")
            except Exception as e:
                print(f"❌ Couldn't jump to slide: {e}")
        # Check for spoken slide number like "slide 5" or just "5"
        number_match = re.search(r"(?:slide\s*)?(\d+)", voice_input)
        if number_match:
            slide_num = int(number_match.group(1))
            try:
                presentation.SlideShowWindow.View.GotoSlide(slide_num)
                print(f"🔢 Jumped to slide {slide_num}")
            except Exception as e:
                print(f"❌ Couldn't jump to slide {slide_num}: {e}")

        else:
            print("⚠️ Command not found.")


    #this part is for errors
    except sr.UnknownValueError:
        print("❌ Didn't catch that. Try again.")
    except sr.RequestError as e:
        print(f"❌ Recognition error: {e}")