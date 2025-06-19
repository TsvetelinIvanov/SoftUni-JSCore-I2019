function attachEvents() {
    let $listItems = $("#items li");
    $listItems.on("click", mark);
    let $showTownsButton = $("#showTownsButton");
    $showTownsButton.on("click", showSelectedTowns);

    function mark() {
		let $li = $(this);		
        if ($li.attr("data-selected")) {
            $li.removeAttr("data-selected");
            $li.css("background", "");
        }
        else {
            $li.attr("data-selected", true);
            $li.css("background", "#DDD");
        }
    }

    function showSelectedTowns() {        
        let selectedTowns = $("#items li[data-selected=true]").toArray().map(li => li.textContent);
        let $selectedTownsElement = $("#selectedTowns");
        $selectedTownsElement.text("Selected towns: " + selectedTowns.join(", "));         
    }
}
