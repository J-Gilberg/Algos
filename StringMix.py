def mix(s1, s2):
    char_counts1 = {}
    char_counts2 = {}
    char_counts_compared = {}
    for i in s1:
        if not i.isupper():
            if i not in char_counts1:
                char_counts1[i] = s1.count(i)

    for i in s2:
        if not i.isupper():
            if i not in char_counts2:
                char_counts2[i] = s2.count(i)

        sub_strings = []
    for i in char_counts_compared:
        sub_strings.append(":".join((i,char_counts2.get(i)*i)))
    return "/".join(sub_strings)

    # elif char_counts2[i] < s2.count(i):
    #     char_counts2[i] = s2.count(i)

print(mix("Are they here", "yes, they are here"))
print(mix("Sadus:cpms>orqn3zecwGvnznSgacs","MynwdKizfd$lvse+gnbaGydxyXzayp"))
print(mix("looping is fun but dangerous", "less dangerous than coding"))
print(mix(" In many languages", " there's a pair of functions"))
print(mix("Lords of the Fallen", "gamekult"))
print(mix("codewars", "codewars"), "")
print(mix("A generation must confront the looming ", "codewarrs"))