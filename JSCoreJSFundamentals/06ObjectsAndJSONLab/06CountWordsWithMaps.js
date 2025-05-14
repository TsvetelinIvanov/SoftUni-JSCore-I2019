function countAndShowWords(text) {
    text = text[0];
    let splitedText = text.split(/\W+/g).filter(w => w !== '');
    let wordCounts = {};
    for (let i = 0; i < splitedText.length; i++) {
        let word = splitedText[i].toLowerCase();
        if (!(word in wordCounts)) {
            wordCounts[word] = 0;
        }
        
        wordCounts[word]++;
    }

    let outputArray = [];
    for (let key in wordCounts){
        outputArray.push(`'${key}' -> ${wordCounts[key]} times`);
    }

    outputArray.sort();

    console.log(outputArray.join('\n'));
}

countAndShowWords(["Far too slow, you're far too slow."])
countAndShowWords(['JS devs use Node.js for server-side JS.-- JS for devs'])
