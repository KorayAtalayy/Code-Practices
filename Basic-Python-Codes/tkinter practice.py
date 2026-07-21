import tkinter as tk
window= tk.Tk()

#label= tk.Label(text="Python Rocks!")
label= tk.Label(
    text="Joe mama",
    bg="Black",
    fg="Red",
    font=200,
    width=20,
    height=10)

button= tk.Button(
    text= "Click me!",
    bg= "Black",
    fg= "White",
    width= 31,
    height= 10)

entry = tk.Entry(
    fg= "Yellow",
    bg= "black",    
    width= 50
)
entry.insert(1, "sup")

label.pack()
button.pack()
entry.pack()
window.mainloop()

#(for later) p = ttk.Progressbar(parent, orient=HORIZONTAL, length=200, mode='determinate')

#import tkinter.ttk as ttk
