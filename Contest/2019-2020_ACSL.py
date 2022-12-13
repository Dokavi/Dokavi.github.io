value = [x for x in input().split()]
p_index = len(value[0])-int(value[1])
p = value[0][p_index]
resultList = []
#input and convert

for i in range(len(value[0])):
    resultList.append(value[0][i])
for i in range(p_index):
    resultList[i] = str(int(resultList[i]) + int(p))
    if len(resultList[i]) > 1:
        resultList[i] = resultList[i][1]
for i in range(len(resultList)-p_index):
    resultList[len(resultList)-1-i] = abs(int(resultList[len(resultList)-1-i])-int(p))
    resultList[p_index] = p
#transform

result = ""
for i in range(len(resultList)):
    result+= str(resultList[i])
#return result
print(result)
print(resultList)
print(value)
print(p)
print(p_index)

