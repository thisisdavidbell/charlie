import random
number = random.randint(1,20)
guess = int(input("i'm thinking of a number from 1 to 20. what is it? "))
while guess != number:
    if guess < number:
        print("your number was too low...")
    else:
        print("your number was too high...")
    guess = int(input("try again..."))
print("correct answer!")
