name1 = input('person one what is your name? ')
name2 = input('person two what is your name? ')
age1 = input(name1 + ' what is your age? ')
age2 = input(name2 + ' what is your age? ')

print()

if age1 > age2 :
    print(name1,"is older than",name2)
elif age1 == age2 :
    print(name1,"is the same age as",name2)
else:
    print(name1,"is younger than",name2)

