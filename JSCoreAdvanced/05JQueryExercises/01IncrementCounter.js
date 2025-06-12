function increment(selector) {
    let $container = $(selector);
    let fragment = document.createDocumentFragment();
    let $textAreaCounter = $('<textarea>');
    let $incrementBtn = $('<button>Increment</button>');
    let $addBtn = $('<button>Add</button>');
    let $ulResults = $('<ul>');

    $textAreaCounter.val(0);
    $textAreaCounter.addClass('counter');
    $textAreaCounter.attr('disabled', true);
    $incrementBtn.addClass('btn');
    $incrementBtn.attr('id', 'incrementBtn');
    $addBtn.addClass('btn');
    $addBtn.attr('id', 'addBtn');
    $ulResults.addClass('results');

    $($incrementBtn).on('click', incrementCounter);
    $($addBtn).on('click', addToResults);
    
    $textAreaCounter.appendTo(fragment);
    $incrementBtn.appendTo(fragment);
    $addBtn.appendTo(fragment);
    $ulResults.appendTo(fragment);
    $container.append(fragment);

    function incrementCounter() {        
        $textAreaCounter.val(Number($textAreaCounter.val()) + 1);
    }

    function addToResults() {
        let $li = $('<li>');
        $li.text($textAreaCounter.val());
        //let $li = $(`<li>${$textAreaCounter.val()}</li>`);
        $ulResults.append($li);
    }
}
