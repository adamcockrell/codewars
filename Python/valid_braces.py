def valid_braces(string):
    checkCurl = 0
    checkReg = 0
    checkPar = 0
    for y in string:
        if(y == "["):
            checkReg += 1
        elif(y == "{"):
            checkCurl += 1
        elif(y == "("):
            checkPar += 1
        elif(y == "]"):
            checkReg -= 1
        elif(y == "}"):
            checkCurl -= 1
        elif(y == ")"):
            checkPar -= 1
        else:
            return False
    if(checkCurl == 0 and checkReg == 0 and checkPar == 0):
        return True
    else:
        return False