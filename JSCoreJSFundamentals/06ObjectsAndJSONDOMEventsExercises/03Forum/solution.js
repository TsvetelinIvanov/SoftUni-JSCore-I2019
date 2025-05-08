function solve() {
    let submitButton = document.getElementsByTagName('button')[0];
    submitButton.addEventListener('click', (event) => {
        event.preventDefault();
        let user = {
            username: document.getElementsByClassName('user-info')[0].children[1].value,
            email: document.getElementsByClassName('user-info')[0].children[5].value,
            topics: Array.from(document.getElementsByClassName('topics')[0].children).filter(ch => ch.checked).map(ch => ch.value)
        }
        
        let tr = document.createElement('tr');
        let tdUsername = document.createElement('td');
        tdUsername.innerHTML = user.username;
        tr.appendChild(tdUsername);
        let tdEmail = document.createElement('td');
        tdEmail.innerHTML = user.email;
        tr.appendChild(tdEmail);
        let tdTopics = document.createElement('td');
        tdTopics.innerHTML = user.topics.join(' ');
        tr.appendChild(tdTopics);

        document.getElementsByTagName('tbody')[0].appendChild(tr);
    });

    let searchButton = document.getElementsByTagName('button')[1];
    searchButton.addEventListener('click', () => {
        let searched = document.getElementsByTagName('input')[7].value;
        let tds = Array.from(document.querySelectorAll('table tbody tr td'));
        for (let td of tds) {
            td.parentNode.style.visibility = 'hidden';
        }

        for (let td of tds) {
            if (td.textContent.includes(searched)) {
                td.parentNode.style.visibility = 'visible';
            }
        }
    })
}
