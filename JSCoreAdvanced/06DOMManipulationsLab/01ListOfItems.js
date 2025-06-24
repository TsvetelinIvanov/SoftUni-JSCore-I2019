function addItem() {
    let inputElement = document.getElementById('newItemText');
    let li = document.createElement('li');
    li.textContent = inputElement.value;
    let ul = document.getElementById('items');
    ul.appendChild(li);
    inputElement.value = '';
}
