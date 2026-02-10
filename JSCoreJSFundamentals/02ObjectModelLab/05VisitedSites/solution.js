function solve() {
    let aElementsArray = Array.from(document.getElementsByTagName('a'));
    aElementsArray.forEach(a => {
        a.addEventListener('click', () => {
            let spanElement = a.parentNode.children[1];
            let spanElementArray = spanElement.textContent.split(' ');
            let visitedCounter = Number(spanElementArray[1]);
            visitedCounter++;
            spanElementArray[1] = visitedCounter;
            spanElement.textContent = spanElementArray.join(' ');
        });
    });
}
