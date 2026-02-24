# def reverse(text):
#     if text == "":
#         return text
#     words = ""
#     for char in range(len(text)-1, -1, -1):
#         words += text[char]

#     return words

# def reverse(text):
#     if text == "":
#         return text
#     words = ""
#     for char in text:
#         words += char + words #add words like a queue fifo 

#     return words
# easiest because python is easy to learn as a programmming
def reverse(text):
    if text == "":
        return text
    return text[::-1]
    
    
