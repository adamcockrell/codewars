def array_diff(a, b):
    output = a
    for x in b:
        while output.__contains__(x):
            output.remove(x)
    return(output)