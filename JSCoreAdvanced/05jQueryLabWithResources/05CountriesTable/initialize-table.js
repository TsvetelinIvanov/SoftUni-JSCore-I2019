function initializeTable() {
    let $createLinkElement = $('#createLink');
    $createLinkElement.on('click', createCountry);

    addCountryToTable('Bulgaria', 'Sofia');
    addCountryToTable('Germany', 'Berlin');
    addCountryToTable('Russia', 'Moscow');
    fixRowLinks();

    function createCountry() {
        let $newCountryElement = $('#newCountryText');
        let $newCapitalElement = $('#newCapitalText');
        let country = $newCountryElement.val();
        let capital = $newCapitalElement.val();
        // let country = $('#newCountryText').val();
        // let capital = $('#newCapitalText').val();
        addCountryToTable(country, capital, true);
        $newCountryElement.val('');
        $newCapitalElement.val('');
        // $('#newCountryText').val('');
        // $('#newCapitalText').val('');
        fixRowLinks();
    }

    function addCountryToTable(country, capital) {
        let $row = $('<tr>');
        let $countryCell = $('<td>');
        $countryCell.text(country);
        $row.append($countryCell);

        let $capitalCell = $('<td>');
        $capitalCell.text(capital);
        $row.append($capitalCell);

        let $actionCell = $('<td>');
        let $upLink = $('<a href="#">[Up]</a>');
        $upLink.on('click', moveRowUp);        
        $actionCell.append($upLink);
        let $downLink = $('<a href="#">[Down]</a>');
        $downLink.on('click', moveRowDown);        
        $actionCell.append($downLink);
        let $deleteLink = $('<a href="#">[Delete]</a>');
        $deleteLink.on('click', deleteRow);        
        $actionCell.append($deleteLink);
        $row.append($actionCell);

        $row.css("display", "none");
        let $countriesTableElement = $('#countriesTable');
        $countriesTableElement.append($row);
        $row.fadeIn();
    }

    function moveRowUp() {
        let $row = $(this).parent().parent();
        $row.fadeOut(function() {
            $row.insertBefore($row.prev());
            $row.fadeIn();
            fixRowLinks();
        });
    }    

    function moveRowDown() {        
        let $row = $(this).parent().parent();
        $row.fadeOut(function() {
            $row.insertAfter($row.next());
            $row.fadeIn();
            fixRowLinks();
        });
    }    

    function deleteRow() {
        let $row = $(this).parent().parent();
        $row.fadeOut(function() {
            $row.remove();
            fixRowLinks()                        
        });
    }    

    function fixRowLinks() {
        let $coutriesTableLinks = $('#countriesTable a');
        $coutriesTableLinks.css("display", "inline");

        let $tablleRous = $('#countriesTable tr');
        let $firstDataRow = $($tablleRous[2]);        
        //let $firstDataRow = $($('#countriesTable tr')[2]);
        $firstDataRow.find('a:contains("Up")').css("display", "none");

        let $lastDataRow = $($tablleRous[$tablleRous.length - 1]);
        //let $lastDataRow = $($('#countriesTable tr')[$tablleRous.length - 1]);
        $lastDataRow.find('a:contains("Down")').css("display", "none");
    }
}
