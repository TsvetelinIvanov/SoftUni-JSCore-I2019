function countWords(text) {
    text = text[0];
    let splitedText = text.split(/\W+/g).filter(w => w !== '');
    let wordCounts = {};
    for (let i = 0; i < splitedText.length; i++) {
        let word = splitedText[i];
        if (!(word in wordCounts)) {
            wordCounts[word] = 0;
        }
        
        wordCounts[word]++;
    }

    console.log(JSON.stringify(wordCounts));
}

countWords(["Far too slow, you're far too slow."])
countWords(['JS devs use Node.js for server-side JS.-- JS for devs'])
