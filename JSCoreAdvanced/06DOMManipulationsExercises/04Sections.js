function create(sentences){
    let divContent = document.getElementById('content');
    for(let sentence of sentences){
        let p = document.createElement('p');
        p.textContent = sentence;
        p.style.display = 'none';
        let div = document.createElement('div');
        div.appendChild(p);
        div.addEventListener('click', showParagraph);
        divContent.appendChild(div);
    }

    function showParagraph(event){
        //let p = event.target.firstChild;
        let p = this.firstChild;
        //let p = this.children[0];
        p.style.display = 'block';
        //p.style.display = 'inline';
    }
}