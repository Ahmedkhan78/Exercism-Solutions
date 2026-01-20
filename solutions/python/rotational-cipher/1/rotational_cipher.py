def rotate(text, key):
    result = []

    for char in text:
        if char.isalpha():
            base = ord('A') if char.isupper() else ord('a')

            shifted = (ord(char) - base + key) % 26
            result.append(chr(base + shifted))
        else:
            result.append(char)
    return ''.join(result)
