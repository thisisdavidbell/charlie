import random
for x in range(0,5):
    animals = ['turtle', 'lynx', 'kingfisher', 'pig', 'sheep', 'chicken', 'mouse']
    animal = random.choice(animals)
    first = animal[0]
    last = animal[-1]
    length = len(animal)
    print('NAME GAME')
    print('length = ', length)
    print('first letter = ', first, 'last letter = ', last)
    guess = input('what do you think the animal is')
    if guess.lower() == animal:
        print('correct')
    else:
        print('WRONG the answer is', animal)
        break
print('END OF GAME')
