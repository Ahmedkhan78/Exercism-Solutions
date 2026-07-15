# This problem is based on matrix search algorithm called as Saddle Back search it is stated as  more optimized algorithm in matrix search 

def saddle_points(matrix):
    # 1. handle empty spaces
    if not matrix:
        return []

    if not matrix[0]:
        return []

    num_rows = len(matrix)
    num_cols = len(matrix[0])

    # 2. Validity for irregularity
    for r in range(num_rows):
        if len(matrix[r]) != num_cols:
            raise ValueError("irregular matrix")

    #3. Pre-compute Row Maximum and Column minimum
    # Max in rows
    rows_maxs = [max(row) for row in matrix]

    # Min in Cols
    cols_mins = [min(col) for col in zip(*matrix)]

    candidates = []

    #4. find intersections
    for r in range(num_rows):
        for c in range(num_cols):
            value = matrix[r][c]
            # Check if value is max in row AND min in column
            if value == rows_maxs[r] and value == cols_mins[c]:
                # Append 1-based coordinates as per problem description
                candidates.append({"row": r + 1, "column": c + 1})


    return candidates
    
        