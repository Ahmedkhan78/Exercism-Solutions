def rows(letter):
    target = letter.upper()
    n = ord(target) - ord('A')
    result = []
    
    for i in range(n + 1):
        # FIX 1: Increment 'A' by 'i' to get the correct character (A, B, C...)
        current_char = chr(ord('A') + i)
        
        outer_spaces = ' ' * (n - i)

        if i == 0:
            row = f"{outer_spaces}{current_char}{outer_spaces}"
        else:
            # FIX 2: Correct formula is 2 * i - 1
            # For i=1 ('B'), 2*1-1 = 1 space.
            # For i=2 ('C'), 2*2-1 = 3 spaces.
            inner_spaces = ' ' * (2 * i - 1)
            row = f"{outer_spaces}{current_char}{inner_spaces}{current_char}{outer_spaces}"
        
        result.append(row)

    bottom_half = result[:-1][::-1]

    return result + bottom_half