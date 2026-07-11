def annotate(garden):
    # Validation: Check if input is a list
    if not isinstance(garden, list):
        raise ValueError("The board is invalid with current input.")
    
    # Handle empty garden
    if len(garden) == 0:
        return []
    
    rows = len(garden)
    cols = len(garden[0])
    
    # Validation: Check if all rows are strings and have same length
    for row in garden:
        if not isinstance(row, str):
            raise ValueError("The board is invalid with current input.")
        if len(row) != cols:
            raise ValueError("The board is invalid with current input.")
        # Check for invalid characters (only ' ' and '*' allowed)
        for char in row:
            if char not in (' ', '*'):
                raise ValueError("The board is invalid with current input.")

    # Create a result grid (list of lists) to build the new board
    result = []
    
    for r in range(rows):
        new_row = []
        for c in range(cols):
            cell = garden[r][c]
            
            if cell == '*':
                # If it's a flower, keep it as is
                new_row.append('*')
            else:
                # Count adjacent flowers
                count = 0
                # Check all 8 directions
                for dr in [-1, 0, 1]:
                    for dc in [-1, 0, 1]:
                        if dr == 0 and dc == 0:
                            continue  # Skip the cell itself
                        
                        nr, nc = r + dr, c + dc
                        
                        # Check boundaries
                        if 0 <= nr < rows and 0 <= nc < cols:
                            if garden[nr][nc] == '*':
                                count += 1
                
                if count > 0:
                    new_row.append(str(count))
                else:
                    new_row.append(' ')
        
        # Join the list back to a string and add to result
        result.append("".join(new_row))
    
    return result