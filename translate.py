import sys
from googletrans import Translator

translator = Translator()

userText = sys.argv[1]

result = translator.translate(userText, dest="nl") # nl - Dutch 
sys.argv.append(result.text)

print(sys.argv[2])