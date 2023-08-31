export const splitSentences=(text)=> {
    console.log(text,"text");
    // Split the text into sentences based on full stops
    const sentences = text.split('. ');

    // Remove any trailing empty strings
    if (sentences[sentences.length - 1] === '') {
        sentences.pop();
    }

    return sentences;
}

// Example usage:
// const text = "my name is vaish. i am good.";
// const splitSentencesArray = splitSentences(text);
// console.log(splitSentencesArray);
