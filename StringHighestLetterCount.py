def high(x):
    s = ''
    arr = []
    while len(x) > 0:
        if x.find(' ') != -1:
            ice = slice(0,x.find(' '))
            print(ice)
            arr.append(x[ice])
            x = x.replace(x[ice],'',1)
            x = x.replace(x[0],'',1)
        else:
            arr.append(x)
            x = ''
    print(arr)
    tempSum = 0
    resultindex = 0
    for i in range(len(arr),0,-1):
        sum = 0
        for ii in range(len(arr[i-1])):
            sum += (ord(arr[i-1][ii])-96)
        print(sum)
        if sum >= tempSum:
            tempSum = sum
            resultindex = i-1
    return arr[resultindex]

print(high('man i need a taxi up to ubud'))
print(high('what time are we climbing up the volcano'))
print(high('take me to semynak'))
print(high('aa b'))
print(high('b aa'))
print(high('bb d'))
print(high('d bb'))
print(high("aaa b"))