import string

plain = string.ascii_lowercase
cipher = plain[::-1]

table = str.maketrans(plain, cipher)
def encode(plain_text):
    encoded = []

    for ch in plain_text.lower():
        if ch.isalpha():
            encoded.append(ch.translate(table))
        elif ch.isdigit():
            encoded.append(ch)
    result = "".join(encoded)

    return " ".join(result[i: i + 5] for i in range(0, len(result), 5))

def decode(ciphered_text):
    decoded = []

    for ch in ciphered_text.lower():
        if ch.isalpha():
            decoded.append(ch.translate(table))
        elif ch.isdigit():
            decoded.append(ch)

    return "".join(decoded)
