import random
animals = ['cat', 'dog', 'rabbit', 'hamster', 'parrot', 'turtle', 'fish', 'snake', 'frog']
animal= random.choice(animals)
guess=input(' guess the animal. its first letter is ' + animal[0] + ', its last letter is ' + animal[-1] + ' and it has ' + str(len(animal)) + ' letters. :  ')
if guess==animal:
    print ('guess is correct')
    print ('you win')
else:
    print ('guess is incorrect')
    print ('the animal was a', animal)

