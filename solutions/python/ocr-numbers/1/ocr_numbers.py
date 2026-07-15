# Problem contains pattern matching via dictionary lookup OCR(optimal charcter recognition) is solely AI  Deep learning problem set where image 

def convert(input_grid):
    # 1. Validate Input Dimensions
    if len(input_grid) % 4 != 0:
        raise ValueError("Number of input lines is not a multiple of four")

    if not input_grid:
        return ""

    num_cols = len(input_grid[0])

    if num_cols % 3 != 0:
        raise ValueError("Number of input columns is not a multiple of three")

    # Ensure all rows have same length (rectangular grid)

    for row in input_grid:
        if len(row) != num_cols:
            raise ValueError("Number of input columns is not a multiple of three")

    # 2. Define Digit signatures(3*4 patterns)
    # Key: tuple of 4 strings(rows), Value: Digit Characters

    DIGITS = {
        (" _ ", "| |", "|_|", "   "): "0",
        ("   ", "  |", "  |", "   "): "1",
        (" _ ", " _|", "|_ ", "   "): "2",
        (" _ ", " _|", " _|", "   "): "3",
        ("   ", "|_|", "  |", "   "): "4",
        (" _ ", "|_ ", " _|", "   "): "5",
        (" _ ", "|_ ", "|_|", "   "): "6",
        (" _ ", "  |", "  |", "   "): "7",
        (" _ ", "|_|", "|_|", "   "): "8",
        (" _ ", "|_|", " _|", "   "): "9",
    }

    results = []
    num_rows = len(input_grid)

    # 3.Process grid in 4 blocks
    for r in range(0, num_rows, 4):
        line_digits = ""
        # iteratre through columns in steps of 3
        for c in range(0, num_cols, 3):
            #  Extract the 3 * 4 digits of current signatures
            # We take 4 rows starting at r, and slice 3 chars starting at c
            signature = tuple(
                input_grid[r + i][c: c+3]
                for i in range(4)
            )
            # lookup in Digits dictionary
            line_digits += DIGITS.get(signature, "?")

        results.append(line_digits)


    # 4. join the result
    return ",".join(results)

