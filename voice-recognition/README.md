# voice-recognition
something about voice recognition on ppt


This is an experimental voice recognition tool for controlling PowerPoint presentations using voice commands.

The current version listens for specific voice commands and, if a PowerPoint file is in presentation mode, jumps to predefined slides based on what it hears. It hasn’t been tested with multiple PowerPoint files open at the same time.

The core logic was initially generated with the help of ChatGPT. This is a rough prototype for now. I plan to revisit it and possibly develop it into a fully functional project.


I have improved the process in voice_control2.py, changes are that now cde first checks for dependencies: 
    1- Bash
    2- Python
    3- Pip
    4- Voice Library (pyaudio)
If they are not ready, bat file first sets these up.
