def validate_pin(pin):
    pinStr = str(pin)
    if pinStr[0] == "-":
        return False
    if len(pinStr) == 4:
        if pinStr.isnumeric():
            if int(pin) >= 0:
                return True
    if len(pinStr) == 6:
        if pinStr.isnumeric():
            if int(pin) >= 0:
                return True
    else:
        return False

print(validate_pin(1234))