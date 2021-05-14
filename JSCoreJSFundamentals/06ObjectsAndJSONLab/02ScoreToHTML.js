function takeScoreInHTMLTable(inputString){
    let inputArray = JSON.parse(inputString);
    
    let outputString = '<table>\n<tr><th>name</th><th>score</th></tr>\n';
    for(let object of inputArray){
        let name = object.name.replace(/&/g, '&amp;');
        name = name.replace(/</g, '&lt;');
        name = name.replace(/>/g, '&gt;');
        name = name.replace(/"/g, '&quot;');
        name = name.replace(/'/g, '&#39;');
        let score = object.score;
        outputString += `<tr><td>${name}</td><td>${score}</td></tr>\n`
    }

    outputString += '</table>'

    console.log(outputString);
}

takeScoreInHTMLTable('[{"name":"Pesho","score":479},{"name":"Gosho","score":205}]')
takeScoreInHTMLTable('[{"name":"Pesho & Kiro","score":479},{"name":"Gosho, Maria & Viki","score":205}]')
takeScoreInHTMLTable('[{"name":"Pencho Penchev","score":0},{"name":"<script>alert(\'Wrong!\')</script>","score":1}]')
takeScoreInHTMLTable(`[{"name":"<div>a && 'b'</div>","score":111},{"name":"Jichka Jochkova","score":-50}]`)