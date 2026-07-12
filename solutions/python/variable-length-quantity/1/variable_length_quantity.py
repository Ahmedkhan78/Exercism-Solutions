def encode(numbers):
    encoded_bytes = []

    for number in numbers:
        if number < 0:
            raise ValueError("negative numbers are not supported")

        if number == 0:
            encoded_bytes.append(0)
            continue

        chunks = []
        while number > 0:
            chunks.append(number & 0x7F)
            number >>= 7


        for i in range(len(chunks) -1, -1, -1):
            if i != 0:
                encoded_bytes.append(chunks[i] | 0x80)
            else:
                encoded_bytes.append(chunks[i])

    return encoded_bytes

def decode(bytes_):

    decoded_number = []
    current_number = 0

    i = 0

    while i < len(bytes_):
        byte = bytes_[i]
        current_number = (current_number << 7) | (byte & 0x7F)

        if not (byte & 0x80):
            decoded_number.append(current_number)
            current_number = 0
        i += 1

        if i == len(bytes_) and (bytes_[i - 1] & 0x80):
            raise ValueError("incomplete sequence")

    return decoded_number
