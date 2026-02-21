import tkinter as tk
from tkinter import messagebox

win = tk.Tk()
win.title("XOX Game Prototype")
win.geometry("500x500")
label = tk.Label(win, text="Welcome to my XOX", fg="blue", bg="yellow", relief="solid",
                 font=("Arial", 12, "bold"))
label.pack(fill="both", pady=2, padx=2)

current_player = "X"  # X ile başlar
player_count = 0  # Oyuncu sayısını tutar


def check_win():
    # Mümkün olan tüm kazanma şartları
    win_conditions = [
        [button1, button2, button3],
        [button4, button5, button6],
        [button7, button8, button9],
        [button1, button4, button7],
        [button2, button5, button8],
        [button3, button6, button9],
        [button1, button5, button9],
        [button3, button5, button7]
    ]

    for condition in win_conditions:
        if condition[0]['text'] == condition[1]['text'] == condition[2]['text'] != '':
            return True

    return False


# Buton tıklama fonksiyonunu tutar
def button_click(btn):
    global current_player, player_count

    if btn.cget("text") == "":
        btn.config(text=current_player, font=("Arial", 12, "bold"))
        btn.config(state=tk.DISABLED)

        # Oyuncuyu değiştirir
        current_player = "X" if current_player == "O" else "O"

        # Kazanma kondisyonunu kontrol eder
        if check_win():
            current_player = "X" if current_player == "O" else "O"
            messagebox.showinfo("Game Over", "Player {} wins!".format(current_player))
            restart_game()
        else:
            player_count += 1
            if player_count == 9:
                messagebox.showinfo("Game Over", "It's a draw!")
                restart_game()

        # Tur sayaçını günceller
        turn_label.config(text="Turn: Player " + current_player)

def restart_game():
    global current_player, player_count

    # Buton ve yazıyı sıfırlar
    button1.config(text="")
    button1.config(state=tk.NORMAL)

    button2.config(text="")
    button2.config(state=tk.NORMAL)

    button3.config(text="")
    button3.config(state=tk.NORMAL)

    button4.config(text="")
    button4.config(state=tk.NORMAL)

    button5.config(text="")
    button5.config(state=tk.NORMAL)

    button6.config(text="")
    button6.config(state=tk.NORMAL)

    button7.config(text="")
    button7.config(state=tk.NORMAL)

    button8.config(text="")
    button8.config(state=tk.NORMAL)

    button9.config(text="")
    button9.config(state=tk.NORMAL)

    current_player = "X"  # X kullanıcısına sıfırlar
    player_count = 0  # Oyuncu sayacını sıfırlar

    # Oyuncu sayacını sıfırlar
    turn_label.config(text="Turn: Player " + current_player)


button1 = tk.Button(win, text="", width=10, height=5, fg="black", bg="white", relief="ridge",
                    font=("Arial", 12, "bold"))
button1.place(x=50, y=70)
button1.config(command=lambda btn=button1: button_click(btn))

button2 = tk.Button(win, text="", width=10, height=5, fg="black", bg="white", relief="ridge",
                    font=("Arial", 12, "bold"))
button2.place(x=50, y=170)
button2.config(command=lambda btn=button2: button_click(btn))

button3 = tk.Button(win, text="", width=10, height=5, fg="black", bg="white", relief="ridge",
                    font=("Arial", 12, "bold"))
button3.place(x=50, y=270)
button3.config(command=lambda btn=button3: button_click(btn))

button4 = tk.Button(win, text="", width=10, height=5, fg="black", bg="white", relief="ridge",
                    font=("Arial", 12, "bold"))
button4.place(x=150, y=70)
button4.config(command=lambda btn=button4: button_click(btn))

button5 = tk.Button(win, text="", width=10, height=5, fg="black", bg="white", relief="ridge",
                    font=("Arial", 12, "bold"))
button5.place(x=150, y=170)
button5.config(command=lambda btn=button5: button_click(btn))

button6 = tk.Button(win, text="", width=10, height=5, fg="black", bg="white", relief="ridge",
                    font=("Arial", 12, "bold"))
button6.place(x=150, y=270)
button6.config(command=lambda btn=button6: button_click(btn))

button7 = tk.Button(win, text="", width=10, height=5, fg="black", bg="white", relief="ridge",
                    font=("Arial", 12, "bold"))
button7.place(x=250, y=70)
button7.config(command=lambda btn=button7: button_click(btn))

button8 = tk.Button(win, text="", width=10, height=5, fg="black", bg="white", relief="ridge",
                    font=("Arial", 12, "bold"))
button8.place(x=250, y=170)
button8.config(command=lambda btn=button8: button_click(btn))

button9 = tk.Button(win, text="", width=10, height=5, fg="black", bg="white", relief="ridge",
                    font=("Arial", 12, "bold"))
button9.place(x=250, y=270)
button9.config(command=lambda btn=button9: button_click(btn))

restart_button = tk.Button(win, text="Restart", width=10, height=2, fg="black", bg="lightgray",
                           relief="ridge", font=("Arial", 12, "bold"), command=restart_game)
restart_button.place(x=390, y=450)

turn_label = tk.Label(win, text="Turn: Player " + current_player, fg="black", bg="white",
                      font=("Arial", 12, "bold"))
turn_label.place(x=50, y=450)

win.mainloop()
