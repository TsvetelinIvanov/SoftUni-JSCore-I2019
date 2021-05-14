function extractText(stringArray) {
    let textArray = [];    
    let startTagPattern = /^<\w+>/;
    let endTagPattern = /<\/\w+>$/;
    let linePattern = /^(<\w+>.+<\/\w+>)$/;

    for (let line of stringArray) {
        if (!linePattern.test(line)) {
            continue;
        }

        let [startTag, endTag] = [line.match(startTagPattern), line.match(endTagPattern)];
        if(startTag[0] !== endTag[0].replace('/', '')){
            continue;
        }

        line = line.replace(/<\w+>/g, '');
        line = line.replace(/<\/\w+>/g, '');
        textArray.push(line);

    }

    let text = textArray.join(' ');
    //console.log(text);
    return text;
}

// function extractText(stringArray){
//     console.log(stringArray.filter(s => /^<(\w+)>.+<(\/\1)>$/.test(s)).map(s => s.replace(/<\/?\w+>/g, '')).join(' '));
// }

extractText(['<h1><span>Hello World!</span></h1>', '<p>I am Peter.'])
extractText(['<div><p>This</p> is</div>', '<div><a>perfectly</a></div>', '<divs><p>valid</p></divs>', '<div><p>This</div></p>', '<div><p>is not</p><div>'])