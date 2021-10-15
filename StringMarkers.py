def solution(string,markers):
    string_list = string.splitlines()
    output = []
    for m in markers:
        for i in range(len(string_list)):
            find_marker = string_list[i].find(m)
            if find_marker != -1:
                string_list[i] = string_list[i].replace(string_list[i][find_marker : len(string_list[i])],"")
                string_list[i] = string_list[i].strip()
    output = "\n".join(string_list)
    print(output)
    return output
solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
# "apples, pears\ngrapes\nbananas")
solution("a #b\nc\nd $e f g", ["#", "$"])

