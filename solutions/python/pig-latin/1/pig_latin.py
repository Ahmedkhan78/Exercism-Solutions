def translate(text):
    def translate_word(word):
        vowels = "aeiou"

        # Rule 1: starts with vowel OR xr OR yt
        if word.startswith(("xr", "yt")) or word[0] in vowels:
            return word + "ay"

        # Rule 3: consonants + qu
        if "qu" in word:
            index = word.find("qu")
            if index != -1 and all(letter not in vowels for letter in word[:index]):
                return word[index+2:] + word[:index+2] + "ay"

        # Rule 4: consonants followed by y
        for i, letter in enumerate(word):
            if letter == "y" and i != 0:
                return word[i:] + word[:i] + "ay"
            if letter in vowels:
                return word[i:] + word[:i] + "ay"

        return word + "ay"

    return " ".join(translate_word(word) for word in text.split())
