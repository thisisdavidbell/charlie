import tkinter
window = tkinter.Tk()
canvas = tkinter.Canvas(window, width=400, height=400)
canvas.pack()


player = canvas.create_rectangle(100, 100, 150, 150, fill="green")
canvas.bind( "<Up>", lambda event: canvas.move(player, 0, -10))
canvas.bind( "<Down>", lambda event: canvas.move(player, 0, 10))
canvas.bind( "<Left>", lambda event: canvas.move(player, -10, 0))
canvas.bind( "<Right>", lambda event: canvas.move(player, 10, 0))

canvas.focus_set()

window.mainloop()
