import tkinter
window = tkinter.Tk()
canvas = tkinter.Canvas(window, width=400, height=400)
canvas.pack()
controlscreen = canvas.create_rectangle(0, 0, 100, 400, fill="black")
up = canvas.create_rectangle(25, 25, 75, 75, fill="blue")
down = canvas.create_rectangle(25, 50, 75, 75, fill="red")

player = canvas.create_rectangle(100, 100, 150, 150, fill="green")
canvas.tag_bind(up, "<Button-1>", lambda event: canvas.move(player, 0, -10))
canvas.tag_bind(down, "<Button-1>", lambda event: canvas.move(player, 0, 10))
canvas.focus_set()

window.mainloop()
