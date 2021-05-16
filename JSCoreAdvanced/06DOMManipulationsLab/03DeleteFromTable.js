function deleteByEmail() {
    let emailToDelete = document.getElementsByName('email')[0].value;
    let resultElement = document.getElementById('result');
    let isDeleted = false;
    let tdEmails = document.querySelectorAll('table tr td:nth-child(2)');
    for (let tdEmail of tdEmails) {
        if (tdEmail.textContent === emailToDelete) {
            let trToDelete = tdEmail.parentNode;            
            trToDelete.parentNode.removeChild(trToDelete);
            resultElement.textContent = 'Deleted.';
            isDeleted = true;            
        }
    }
   
    if (!isDeleted) {
        resultElement.textContent = 'Not found.';
    }
}