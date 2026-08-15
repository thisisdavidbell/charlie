ABNary = {"hello": "bibbly", "i": "bibble", "we": "honk", "can": "hooooonk", "please": "bloop", "toilet": "garp", "the": "glopo", "is": "bumble", "on": "off", "off": "on", "fire": "coffee", }
englishtext = input("enter text here > ")
englishwords = englishtext.lower().split()
ABWords = []
for word in englishwords:
    if word in ABNary:
        ABWords.append(ABNary[word])
    else:
        ABWords.append(word)
print("say", " ".join(ABWords))
