import tkinter
window = tkinter.Tk()
canvas = tkinter.Canvas(window, width=400, height=400)
canvas.pack()
button = tkinter.Button(window, text="Click Me", command=lambda: button_clicked())
def button_clicked():
    button.config(text="Clicked! click again", command=lambda: button_clickedtwo())
def button_clickedtwo():
    button.config(text="Clicked twice! maybe a third time?", command=lambda: button_clickedthree())
def button_clickedthree():
    button.config(text="Clicked three times! that's enough.", command=lambda: button_clickedfour())
def button_clickedfour():
    button.config(text="Clicked four times! okay, that's really enough.", command=lambda: button_clickedfive())
def button_clickedfive():
    button.config(text="Clicked five times! that's it. if you click again i'm leaving. i will destroy the window. as well.", command=lambda: button_clickedsix())
def button_clickedsix():
    button.pack_forget()
    
    
    window.destroy()


button.pack()
window.mainloop()