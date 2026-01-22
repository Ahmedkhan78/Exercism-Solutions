
/**
 * Determines the first letter of the given line of the poem, after trimming whitespace.
 * If the line is empty, it returns a single space.
 *
 * @param {string} line - The line of the poem.
 * @returns {string} The first letter of the trimmed line or a space if the line is empty.
 */
export function frontDoorResponse(line) {
  // Remove leading and trailing whitespace from the input line
  let trimmedLine = line.trim();
  
  // Check if the trimmed line is empty
  // Note: This should check length, not equality to 0
  if (trimmedLine.length === 0) {
    return " "; // Return a single space if the trimmed line is empty
  }
  
  // Return the first letter of the trimmed line, capitalized
  return trimmedLine[0].toUpperCase();
}

/**
 * Capitalizes the first letter of the given word, lowercases the rest, and returns it.
 * If the word is empty, it returns an empty string.
 *
 * @param {string} word - The input word to be processed.
 * @returns {string} The correctly capitalized word or an empty string if the input is empty.
 */
export function frontDoorPassword(word) {
  // Trim leading and trailing whitespace from the input word
  const trimmedWord = word.trim();
  
  // Check if the trimmed word is empty
  // Note: This should check length, not equality to 0
  if (trimmedWord.length === 0) {
    return ""; // Return an empty string if the trimmed word is empty
  }
  
  // Capitalize the first letter of the trimmed word and lowercase the rest
  const capitalizedWord = trimmedWord[0].toUpperCase() + trimmedWord.slice(1).toLowerCase();
  
  return capitalizedWord;
}

/**
 * Determines the last non-whitespace letter of the given line of the poem,
 * after trimming whitespace. If the line is empty, it returns an empty string.
 *
 * @param {string} line - The line of the poem.
 * @returns {string} The last non-whitespace letter of the trimmed line or an empty string if the line is empty.
 */
export function backDoorResponse(line) {
  // Trim leading and trailing whitespace from the input line
  let trimmedLine = line.trim();
  
  // Check if the trimmed line is empty
  // Note: This should check length, not equality to 0
  if (trimmedLine.length === 0) {
    return ""; // Return an empty string if the trimmed line is empty
  }
  
  // Return the last character of the trimmed line
  return trimmedLine[trimmedLine.length - 1];
}

/**
 * Capitalizes the first letter of a given word, lowercases the rest, and appends extra words if the original word is empty.
 *
 * @param {string} word - The input word to be processed.
 * @returns {string} The capitalized word with additional text if the original word is empty.
 */
export function backDoorPassword(word) {
    // Remove any leading or trailing whitespace from the input word
    let trimmedWord = word.trim();
    
    // Define additional words to be appended if the trimmed word is empty
    let extraWords = ", please";
    
    // Check if the trimmed word is empty
    // Note: This condition should be `trimmedWord.length === 0` instead of `trimmedWord === 0`
    if (trimmedWord.length === 0) {
        return extraWords; // Return extra words if the trimmed word is empty
    }
    
    // Capitalize the first letter of the trimmed word and lowercase the rest
    let capitalizeWords = trimmedWord[0].toUpperCase() + trimmedWord.slice(1).toLowerCase();
    
    // Append the extra words to the capitalized trimmed word
    let completeWords = capitalizeWords + extraWords;
    
    return completeWords; // Return the final formatted string
  
}
