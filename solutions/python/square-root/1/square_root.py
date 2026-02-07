def square_root(number):
    if number < 0:
        return ValueError("number must be non-negative")

    if number == 0 or number == 1:
        return number

    low = 1
    high = number
    while low <= high:
        mid = (low + high) // 2
        square = mid * mid

        if square == number:
            return mid
        elif square < number:
            low = mid + 1
        else:
            high = mid - 1
        
        
        
