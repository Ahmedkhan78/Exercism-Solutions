def is_valid(isbn):
    isbn = isbn.replace("-", "")

    if len(isbn) != 10:
        return False

    total = 0
    for i in range(10):
        ch = isbn[i]
        if i == 9 and ch == "X":
            value = 10
        elif ch.isdigit():
            value = int(ch)
        else:
            return False

        total += value * (10 - i)

    return total % 11 == 0 
    
            