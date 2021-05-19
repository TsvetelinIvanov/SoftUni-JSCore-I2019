function attachEvents() {
    const baseUrl = 'https://messenger-947fb.firebaseio.com/messenger';

    $('#submit').click(createMessage);
    $('#refresh').click(loadMessages);

    loadMessages();

    function createMessage() {
        let author = $('#author').val();
        let content = $('#content').val();
        let timestamp = Date.now();
        let message = { author, content, timestamp };
        $.post(baseUrl + '.json', JSON.stringify(message)).then(loadMessages);
    }

    function loadMessages() {
        $.get(baseUrl + '.json').then(displayMessages);
    }

    function displayMessages(messages) {
        let $textareaMessages = $('#messages');
        $textareaMessages.empty();
        let sortedMessages = {};
        Object.keys(messages).sort((a, b) => a.timestamp - b.timestamp).forEach(mk => sortedMessages[mk] = messages[mk]);
        for (let messageKey of Object.keys(sortedMessages)) {
            $textareaMessages.append(sortedMessages[messageKey]['author'] + ': ' + sortedMessages[messageKey]['content'] + '\n');
        }
    }
}