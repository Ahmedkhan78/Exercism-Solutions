


def find(search_list, value):
    # Check if list is empty
    if not search_list:
        raise ValueError("value not in array")
    
    left = 0
    right = len(search_list) - 1  # Start at the last index

    while left <= right:
        # Correct integer division
        middle = (left + right) // 2
        
        if search_list[middle] == value:
            return middle
        elif search_list[middle] > value:
            # Target is in the left half
            right = middle - 1
        else:
            # Target is in the right half
            left = middle + 1

    # If the loop finishes, the value was not found
    raise ValueError("value not in array")