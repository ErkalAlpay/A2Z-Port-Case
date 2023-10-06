function findLongestWordWithMostVowels(sentence) {
    // Remove non-English letters and split the sentence into words
    const words = sentence.split(/\s+/).filter(word => /^[a-zA-Z]+$/.test(word));

    let longestWord = '';
    let maxLength = 0;
    let maxVowelsCount = 0;

    // Iterate through each word and find the longest word with most vowels
    words.forEach(word => {
        const vowelsCount = (word.match(/[aeiouAEIOU]/g) || []).length;
        const wordLength = word.length;

        if (wordLength > maxLength || (wordLength === maxLength && vowelsCount > maxVowelsCount)) {
            longestWord = word;
            maxLength = wordLength;
            maxVowelsCount = vowelsCount;
        }
    });

    return longestWord;
}

// Example usage
const sentence = "Hello, this is a test sentence writed by Erkal Alpay";
const longestWord = findLongestWordWithMostVowels(sentence);
console.log("Longest word with most vowels:", longestWord);
