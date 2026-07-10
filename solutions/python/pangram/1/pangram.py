def is_pangram(sentence):
    if sentence == "":
        return False
    sentence = sentence.lower()

    letters = set()

    for char in sentence:
        if 'a' <= char <= 'z':
            letters.add(char)

    return len(letters) == 26
    
    