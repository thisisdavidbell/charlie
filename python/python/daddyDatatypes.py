a = 3
b = "4"
c = "five"
d = 3.14
e = "3.14"

# 1. print out what type a,b,c,d and e are, along with their values

print(type(a), a)
print(type(b), b)
print(type(c), c)
print(type(d), d)
print(type(e), e)

# 2. Add together a and b and print the answer
b = int(b)
f = a + b
print(f)


# 3. Concatenate a and c
a = str(a)
print(a + c)


# 4. Times d and e together and print "Pi squared = <answer>"

e = float(e)
print("pi squared = ", e * d)


# 5. print out a,b,c,d,e in a single print statement

print(a, b, c, d, e)
