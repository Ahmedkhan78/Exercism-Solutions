def answer(question):
    if not question.startswith("What is ") or not question.endswith("?"):
        raise ValueError("syntax error")

    words = question[8:-1].split()

    if not words:
        raise ValueError("syntax error")

    tokens = []
    i = 0

    # --- Parse tokens ---
    while i < len(words):
        word = words[i]

        # number
        try:
            num = int(word)
            tokens.append(num)
            i += 1
            continue
        except ValueError:
            pass

        # operators
        if word == "plus":
            tokens.append("+")
            i += 1

        elif word == "minus":
            tokens.append("-")
            i += 1

        elif word == "multiplied":
            if i + 1 >= len(words) or words[i + 1] != "by":
                raise ValueError("syntax error")
            tokens.append("*")
            i += 2

        elif word == "divided":
            if i + 1 >= len(words) or words[i + 1] != "by":
                raise ValueError("syntax error")
            tokens.append("/")
            i += 2

        else:
            # unknown word (including "cubed", etc.)
            raise ValueError("unknown operation")

    # --- Validate structure: number op number op number ...
    if len(tokens) % 2 == 0:
        raise ValueError("syntax error")

    for idx in range(len(tokens)):
        if idx % 2 == 0:
            if not isinstance(tokens[idx], int):
                raise ValueError("syntax error")
        else:
            if tokens[idx] not in {"+", "-", "*", "/"}:
                raise ValueError("syntax error")

    # --- Evaluate left-to-right ---
    result = tokens[0]

    for i in range(1, len(tokens), 2):
        op = tokens[i]
        num = tokens[i + 1]

        if op == "+":
            result += num
        elif op == "-":
            result -= num
        elif op == "*":
            result *= num
        elif op == "/":
            result = int(result / num)  # truncates toward 0
        else:
            raise ValueError("unknown operation")

    return result