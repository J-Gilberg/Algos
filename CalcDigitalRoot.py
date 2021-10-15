def digital_root(n):
    output = 0
    if(len(str(n)) == 1):
        return n
    while len(str(n)) > 1:
        output = 0
        for i in str(n):
            output += int(i)
        n = str(output)
    return output

print(digital_root(16))
print(digital_root(942))
print(digital_root(132189))
print(digital_root(493193))