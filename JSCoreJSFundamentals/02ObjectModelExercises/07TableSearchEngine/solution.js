function solve() {
    let studentsData = Array.from(document.querySelectorAll('table>tbody>tr'));
    let searchButton = document.getElementById('searchBtn');
    let searchField = document.getElementById('searchField');

    searchButton.addEventListener('click', function() {
        let searchedWord = searchField.value.toLowerCase();
        studentsData.forEach(studentDataRow => {
            studentDataRow.classList.remove('select');
            let studentDataCells = Array.from(studentDataRow.cells);
            studentDataCells.forEach(cell => {
                if (cell.textContent.toLowerCase().includes(searchedWord)){
                    studentDataRow.classList.add('select');
                }
            })

            searchField.value = '';
        })
    });
}