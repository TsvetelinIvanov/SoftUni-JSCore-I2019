function addSticker() {
    let $titleInput = $('input[class="title"]');
    //let $titleInput = $('.title');
    let $textInput = $('input[class="content"]');
    //let $textInput = $('.content');
    let $ul = $('#sticker-list');

    if ($titleInput.val() && $textInput.val()) {
        let $li = $('<li>');
        $li.addClass('note-content');
        let $a = $('<a>');
        $a.addClass('button');
        $a.text('x');
        $a.on('click', () => $li.remove());
        let $h2 = $('<h2>');
        $h2.text($titleInput.val());
        let $hr = $('<hr>');
        let $p = $('<p>');
        $p.text($textInput.val());
        $li.append($a, $h2, $hr, $p);

        // let li = $.parseHTML(`<li class="note-content"><a class="button">x</a><h2>${$titleInput.val()}</h2><hr/><p>${$textInput.val()}</p></li>`);
        // let $li = $(li);
        // $li.find('.button').on('click', () => $li.remove());               
        
        $ul.append($li);

        $titleInput.val('');
        $textInput.val('');
    }
}