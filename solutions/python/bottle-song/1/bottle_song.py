def recite(start, take=1):
    def number_to_word(n):
        words = [
            "no", "one", "two", "three", "four", 
            "five", "six", "seven", "eight", "nine", "ten"
        ]
        return words[n]

    def bottle_text(n):
        if n == 1:
            return "bottle"
        return "bottles"

    lyrics = []
    
    for i in range(take):
        current_num = start - i
        next_num = current_num - 1
        
        # First two lines
        current_word = number_to_word(current_num).capitalize()
        current_bottles = bottle_text(current_num)
        lyrics.append(f"{current_word} green {current_bottles} hanging on the wall,")
        lyrics.append(f"{current_word} green {current_bottles} hanging on the wall,")
        
        # Third line
        lyrics.append("And if one green bottle should accidentally fall,")
        
        # Fourth line
        next_word = number_to_word(next_num)
        next_bottles = bottle_text(next_num)
        lyrics.append(f"There'll be {next_word} green {next_bottles} hanging on the wall.")
        
        # Add an empty line between verses, but not after the last one
        if i < take - 1:
            lyrics.append("")
            
    return lyrics