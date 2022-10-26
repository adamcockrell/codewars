from operator import contains


start = "the-stealth_warrior"

def to_camel_case(text):
    if text == "":
        return("")
    toSpace = text.replace("_", " ")
    toSpace2 = toSpace.replace("-", " ")
    toArr = toSpace2.split()
    camel_case = [toArr[0]]
    for x in toArr[1:]:
        camel_case += x.capitalize()
    output = "".join(camel_case)
    return output

print(to_camel_case(start))