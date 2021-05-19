function loadRepos() {
    $('#repos').empty();
    let url = 'https://api.github.com/users/' + $('#username').val() + '/repos';
    $.ajax({ url, success: displayRepos, error: displayError });

    function displayRepos(repos) {
        for (let repo of repos) {
            let $link = $('<a>');
            $link.text(repo.full_name);
            $link.attr('href', repo.html_url);
            let $li = $('<li>');
            $li.append($link);
            $('#repos').append($li);
           // $('#repos').append($('<li>').append($link));
        }

    }

    function displayError(error) {
        let $li = $('<li>');
        $li.text('Error');
        $('#repos').append($li);
        //$('#repos').append($('<li>Error</li>'));
    }
}