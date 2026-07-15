from typing import List

def gamestate(board: List[str]) -> str:
    # 1. Count Marks
    x_count = sum(row.count('X') for row in board)
    o_count = sum(row.count('O') for row in board)
    
    # 2. Check Win Conditions
    def check_win(player: str) -> bool:
        lines = []
        # Rows
        lines.extend(board)
        # Columns (Fixed: added 'for c in range(3)')
        for c in range(3):
            lines.append("".join(board[r][c] for r in range(3)))
        # Diagonals
        lines.append("".join(board[i][i] for i in range(3)))
        lines.append("".join(board[i][2-i] for i in range(3)))
        
        return any(line == player * 3 for line in lines)

    x_wins = check_win('X')
    o_wins = check_win('O')

    # 3. Validate Turn Order
    if o_count > x_count:
        raise ValueError("Wrong turn order: O started")
    if x_count > o_count + 1:
        raise ValueError("Wrong turn order: X went twice")

    # 4. Validate Win States (Impossible Boards)
    if x_wins and o_wins:
        raise ValueError("Impossible board: game should have ended after the game was won")
    
    if x_wins and x_count == o_count:
        raise ValueError("Impossible board: game should have ended after the game was won")
    
    if o_wins and x_count != o_count:
        raise ValueError("Impossible board: game should have ended after the game was won")

    # 5. Determine Result
    if x_wins or o_wins:
        return "win"
    if x_count + o_count == 9:
        return "draw"
    return "ongoing"   