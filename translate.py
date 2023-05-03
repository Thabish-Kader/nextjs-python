import sys
from googletrans import Translator

translator = Translator()

text = "What is you name ?"
result = translator.translate(text, dest="nl") # nl - Dutch 
sys.argv.append(result.text)

print(sys.argv[1])