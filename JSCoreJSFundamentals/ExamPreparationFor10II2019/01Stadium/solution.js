function solve() {
    let teamTicketPrices = {'A':10, 'B':7, 'C':5};
    let vipTicketPrices = {'A':25, 'B':15, 'C':10};
    let summary = {fans:0, profit:0};
    let buttons = document.getElementsByClassName('seat');
    let outputTextarea = document.getElementById('output');
    let summaryElement = document.getElementById('summary');

    Array.from(buttons).forEach(b => {
        b.addEventListener('click', clickButton);
    });

    let summaryButton = summaryElement.children[0];
    summaryButton.addEventListener('click', showSummary);

    function clickButton(event){
        let button = event.target;
        let seatNumber = Number(button.textContent);
        let sector = String.fromCharCode(Number(button.parentNode.cellIndex) + 65);
        let zone = button.parentNode.parentNode.parentNode.parentNode.parentNode.className;
        if(button.style.backgroundColor === ''){
            summary.fans++;
            
            if(zone !== 'VIP'){
                summary.profit += teamTicketPrices[sector];
            } else {
                summary.profit += vipTicketPrices[sector];
            }

            button.style.backgroundColor = 'rgb(255, 0, 0)';
            outputTextarea.value += ` Seat ${seatNumber} in zone ${zone} sector ${sector} was taken.\n`;
        } else {
            outputTextarea.value += ` Seat ${seatNumber} in zone ${zone} sector ${sector} is unavailable.\n`;
        }        
    }

    function showSummary(){
        let summarySpan = summaryElement.children[1];
        summarySpan.textContent = `${summary.profit} leva, ${summary.fans} fans.`;
    }
}