import json

u = input("File to convert:")


f = open(u, "r")
dat = (f.read()) 



datb = "[" + dat.replace ('"', "") + "]"
datp = datb.replace ("\n%\n", '", "')


final = json.dumps(datp)

f = open(u + ".json", "w")
f.write(final)
f.close()
