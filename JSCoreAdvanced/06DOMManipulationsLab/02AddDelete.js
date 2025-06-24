function addItem() {
    let inputElement = document.getElementById('newText');
    let li = document.createElement('li');
    li.innerHTML = inputElement.value + ' <a href="#">[Delete]</a>';    
    li.lastChild.addEventListener('click', deleteItem)
    let ul = document.getElementById('items');
    ul.appendChild(li);
    inputElement.value = '';
    
    function deleteItem() {
        // let li = this.parentNode;
        // let ul = li.parentNode;
        ul.removeChild(li);
    }
}
