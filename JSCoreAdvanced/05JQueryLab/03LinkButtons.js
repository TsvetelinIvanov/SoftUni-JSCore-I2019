function attachEvents(){
    let $linkButtons = $('a.button');    
    $linkButtons.on('click', mark);
     
    function mark(){
        $('.selected').removeClass('selected');
        $(this).addClass('selected');
    }
}