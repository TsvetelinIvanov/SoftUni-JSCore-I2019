function solve() {
    let clicksCount = 0;
    document.querySelector('button').addEventListener('click', () => {
        let p = document.querySelector('#exercise p');
        if (clicksCount % 3 === 0) {
            p.style.color = "blue";
        } 
        else if (clicksCount % 3 === 1) {
            p.style.color = "green";
        } 
        else if (clicksCount % 3 === 2) {
            p.style.color = "red";
        }
      
        clicksCount++;
        p.style.fontSize = `${clicksCount * 2}px`; 
    });
}
