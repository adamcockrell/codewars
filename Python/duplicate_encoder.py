def duplicate_encode(word):
    letters = {}
    for x in word:
        if(x not in letters.keys()):
            letters.update(x, 1)
        elif(x in letters.keys()):
            letters[x] = letters[x] + 1
    print(letters)

duplicate_encode('DDDDDDDD')