function loadCommits() {
    $('#commits').empty();
    const baseUrl = 'https://api.github.com/repos/';
    let username = $('#username').val();
    let repo = $('#repo').val();
    let url = baseUrl + username + '/' + repo + '/commits';

    $.get(url)
        .then(displayCommits)
        .catch(displayError);

    function displayCommits(commits) {
        for (let commit of commits) {
            let $li = $('<li>');
            $li.text(commit.commit.author.name + ': ' + commit.commit.message);
            $('#commits').append($li);
            //$('#commits').append($('<li>').text(commit.commit.author.name + ': ' + commit.commit.message));
        }
    }

    function displayError(error) {
        $('#commits').append($('<li>').text('Error: ' + error.status + ' (' + error.statusText + ')'));
    }
}
