function search() {
    let searchedText = $('#searchText').val();
    let $matchedElements = $(`#towns li:contains(${searchedText})`)
    $matchedElements.css("font-weight", "bold");
    
    let $notMatchedElements = $(`#towns li:not(:contains(${searchedText}))`);
    $notMatchedElements.css("font-weight", "normal");
    
    let $resutElement = $('#result');
    $resutElement.text($matchedElements.length + ' matches found');
}
