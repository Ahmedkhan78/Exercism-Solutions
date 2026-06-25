def is_valid(isbn):
    isbn = isbn.replace("-", "")

    if len(isbn) != 10:
        return False

    total = 0
    for num in range(10):
        char = isbn[num]
        if num == 9 and char == "X":
            value = 10
        elif char.isdigit():
            value = int(char)
        else:
            return False

        total += value * (10 - num)

    return total % 11 == 0 
    
            