# create a string with yoru full name in it

name = "Charlie James Rowland Bell"

# print the 10th character
print(name[9])

# print the first 7 letters
print(name[0:7])

# print the last 4 letters
print(name[-4: ])

# print the 1st, 9th, 15th, 23rd
print(name[0],name[8],name[14],name[22])

# count the characters
nameLength = len(name)
print(nameLength)

# print how many 'a's?
nameAs = name.count('a')
print(nameAs)
