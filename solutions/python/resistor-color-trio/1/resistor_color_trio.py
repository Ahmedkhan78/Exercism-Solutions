def label(colors):
    color_map = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"]
    first_digit = color_map.index(colors[0])
    second_digit = color_map.index(colors[1])
    main_value = first_digit * 10 + second_digit

    zeros = color_map.index(colors[2])
    total_ohms = main_value * (10 ** zeros)

    if total_ohms >= 1_000_000_000:
        value = total_ohms/ 1_000_000_000
        unit = "gigaohms"
    elif  total_ohms >= 1_000_000:
        value = total_ohms / 1_000_000
        unit = "megaohms"
    elif  total_ohms >= 1_000:
        value = total_ohms / 1_000
        unit = "kiloohms"
    else:
        value = total_ohms
        unit = "ohms"
    if value == int(value):
        value = int(value)

    return f"{value} {unit}"

