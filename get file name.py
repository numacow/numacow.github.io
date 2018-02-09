from os import listdir
from os.path import isfile, join
mypath="I:/homepage/themes/ruri-dark/images/mascots"
onlyfiles=[f for f in listdir(mypath) if isfile(join(mypath,f))]
string=""
for i in onlyfiles:
    string=string+"'"+i+"',"

fob=open("I:/homepage/themes/ruri-dark/mascots.js",'w')
fob.write("var mascotList = ["+string+"];")
fob.close()
