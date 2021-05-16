function notify(message) {    
    let divNotification = document.getElementById('notification');
    divNotification.textContent = message;
    divNotification.style.display = 'block';

    setTimeout(hideNotification, 2000);
    
    function hideNotification() {
        divNotification.style.display = 'none';
    }
}