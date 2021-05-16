function traverseDom(selector){
    let $target = $(selector).children();
    if($target.length === 0){
        $(selector).addClass("highlight");
        return;
    }
    let $next = $target;
    while($next.length > 0){
        $target = $next;
        $next = $next.children();
    }
    $target.first().addClass("highlight");
    $target.first().parentsUntil($(selector).parent()).addClass("highlight");
}

traverseDom('.article')