function focus() {
    let inputElements = document.getElementsByTagName('input');
    Array.from(inputElements).forEach(input => {
        input.addEventListener('focus', event => event.target.parentNode.className = 'focused');
        input.addEventListener('blur', event => event.target.parentNode.removeAttribute('class'));
    });
}
