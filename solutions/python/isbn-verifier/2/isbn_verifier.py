def is_valid(isbn):
    isbn = isbn.replace("-", "")

    if len(isbn) != 10:
        return False

    total = 0
    for num in range(10):
        ch = isbn[num]
        if num == 9 and ch == "X":
            value = 10
        elif ch.isdigit():
            value = int(ch)
        else:
            return False

        total += value * (10 - num)

    return total % 11 == 0 
    
            