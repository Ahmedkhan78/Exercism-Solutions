def resistor_label(colors):
    # Color to Digit mapping
    color_map = {
        "black": 0, "brown": 1, "red": 2, "orange": 3, "yellow": 4,
        "green": 5, "blue": 6, "violet": 7, "grey": 8, "white": 9
    }
    
    # Tolerance mapping
    tolerance_map = {
        "grey": "0.05", "violet": "0.1", "blue": "0.25", "green": "0.5",
        "brown": "1", "red": "2", "gold": "5", "silver": "10"
    }

    if len(colors) == 1:
        return "0 ohms"

    if len(colors) == 4:
        val1 = color_map[colors[0]]
        val2 = color_map[colors[1]]
        multiplier = color_map[colors[2]]
        tolerance = tolerance_map[colors[3]]
        base_value = val1 * 10 + val2 
    elif len(colors) == 5:
        val1 = color_map[colors[0]]
        val2 = color_map[colors[1]]
        val3 = color_map[colors[2]]
        multiplier = color_map[colors[3]]
        tolerance = tolerance_map[colors[4]]
        base_value = val1 * 100 + val2 * 10 + val3
    else:
        raise ValueError("Invalid number of color bands")

    resistance = base_value * (10 ** multiplier)

    if resistance >= 1_000_000_000:
        value = resistance/ 1_000_000_000
        unit = "gigaohms"
    elif  resistance >= 1_000_000:
        value = resistance / 1_000_000
        unit = "megaohms"
    elif  resistance >= 1_000:
        value = resistance / 1_000
        unit = "kiloohms"
    else:
        value = resistance
        unit = "ohms"
    
    if value == int(value):
        value_str  = str(int(value))
    else:
        value_str = str(value)

    return f"{value_str} {unit} ±{tolerance}%"
    

    
    
   
