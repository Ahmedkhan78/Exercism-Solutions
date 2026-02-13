def is_valid_traingle(sides):
    a,b,c = sides
    if a<=0 or b <= 0 or c <= 0:
        return False

    if a + b < c or b + c < a or a + c < b:
        return False
    return True
        

def equilateral(sides):
    if not is_valid_traingle(sides):
        return False

    a, b, c = sides
    return a == b == c


def isosceles(sides):
    if not is_valid_traingle(sides):
        return False

    a, b, c = sides
    return a == b or b == c or a == c
    


def scalene(sides):
    if not is_valid_traingle(sides):
        return False

    a, b, c = sides
    return a != b and b != c and a != c
