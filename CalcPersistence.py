def persistence(n):
    count = 0
    while n >= 9:
        p = 0
        for i in range(0,len(str(n))):
            if i == 0:
                p = int(str(n)[i])
            else:
                p = p*int(str(n)[i])
        n = p
        count += 1
    return count

print(persistence(39))
print(persistence(4))
print(persistence(25))
# print(persistence(999))