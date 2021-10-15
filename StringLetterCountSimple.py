def xo(s):
    count = 0
    for i in str(s).lower():
        if i == 'x':
            count += 1
        if i == 'o':
            count -= 1
    if count == 0:
        return True
    return False

print(xo('xo'))
xo('xo0')
print(xo('xxxoo'))