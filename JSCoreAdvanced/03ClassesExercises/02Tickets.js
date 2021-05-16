function sortTickets(ticketsData, sortingCriterion) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
    
    let tickets = [];
    for (let ticketData of ticketsData) {
        let [destination, price, status] = ticketData.split('|');
        price = Number(price);
        let ticket = new Ticket(destination, price, status);
        tickets.push(ticket);
    }

    tickets = tickets.filter(t => t !== '');
    
    switch(sortingCriterion){
        case 'destination': tickets.sort((a, b) => a.destination.localeCompare(b.destination)); break; 
        case 'price': tickets.sort((a, b) => a.price - b.price); break;
        case 'status': tickets.sort((a, b) => a.status.localeCompare(b.status)); break;
    }

    return tickets;
}

console.log(sortTickets(['Philadelphia|94.20|available', 'New York City|95.99|available', 'New York City|95.99|sold', 'Boston|126.20|departed'], 'destination'))
console.log(sortTickets(['Philadelphia|94.20|available', 'New York City|95.99|available', 'New York City|95.99|sold', 'Boston|126.20|departed'], 'status'))