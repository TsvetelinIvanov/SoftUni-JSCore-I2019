class Hotel {
  constructor(name, capacity) {
    this.name = name;
    this.capacity = capacity;
    this.bookings = [];
    this.currentBookingNumber = 1;
    this.rooms = {
      single: Math.floor(this.capacity / 2),
      double: Math.floor(this.capacity * 0.3),
      maisonette: Math.floor(this.capacity * 0.2),
    };

  }

  get roomsPricing() {
    return {
      single: 50,
      double: 90,
      maisonette: 135
    };
  }

  get servicesPricing() {
    return {
      food: 10,
      drink: 15,
      housekeeping: 25
    };
  }
          
  rentARoom(name, type, nights) {
    if (this.rooms[type] <= 0) {
      let outputMessage = `No ${type} rooms available!`;
      let availableRooms = Object.keys(this.rooms);

      availableRooms.forEach(room => {
        if (room !== type && this.rooms[room] > 0) {
          outputMessage += ` Available ${room} rooms: ${this.rooms[room]}.`;
        }
      });

      return outputMessage;
    }

    let roomBooking = {
      name,
      type,
      nights,
      number: this.currentBookingNumber
    };
    let bookingNumber = this.currentBookingNumber;
    this.bookings.push(roomBooking);
    this.currentBookingNumber++;
    this.capacity--;
    this.rooms[type]--;

    return `Enjoy your time here Mr./Mrs. ${name}. Your booking is ${bookingNumber}.`;
  }
  
  roomService(currentBookingNumber, serviceType) {
    let roomBooking = null;
    for (let booking of this.bookings) {
      if (booking.number === currentBookingNumber) {
        roomBooking = booking;
        break;
      }
    }
    //let roomBooking = this.bookings.find(b => b.number === currentBookingNumber);//one test in Judge doesn't pass
    if (roomBooking === null) {
      return `The booking ${currentBookingNumber} is invalid.`;
    }

    if (!this.servicesPricing.hasOwnProperty(serviceType)) {
      return `We do not offer ${serviceType} service.`;
    }

    if (!roomBooking.hasOwnProperty('services')) {
      roomBooking.services = [];
    }

    roomBooking.services.push(serviceType);

    return `Mr./Mrs. ${roomBooking.name}, Your order for ${serviceType} service has been successful.`;
  }
  
  checkOut(currentBookingNumber) {
    let roomBooking = null;
    let index = 0;
    for (let i = 0; i < this.bookings.length; i++) {
      if (this.bookings[i].number === currentBookingNumber){
        roomBooking = this.bookings[i];
        index = i;
        break;
      }      
    }
    
    if (roomBooking === null) {
      return `The booking ${currentBookingNumber} is invalid.`;
    }

    
    let totalMoney = roomBooking.nights * this.roomsPricing[roomBooking.type];    
    let outputMessage = `We hope you enjoyed your time here, Mr./Mrs. ${roomBooking.name}. The total amount of money you have to pay is ${totalMoney} BGN.`;    

    if (roomBooking.hasOwnProperty('services')) {
      let totalServiceMoney = 0;
      for (let serviceType of roomBooking.services) {
        totalServiceMoney += this.servicesPricing[serviceType];
      }

      outputMessage = `We hope you enjoyed your time here, Mr./Mrs. ${roomBooking.name}. The total amount of money you have to pay is ${totalMoney + totalServiceMoney} BGN. You have used additional room services, costing ${totalServiceMoney} BGN.`;      
    }

    this.capacity++;
    this.rooms[roomBooking.type]++;
    this.currentBookingNumber--;
    this.bookings.splice(index, 1);

    return outputMessage;
  }
  
  report(){
      if(this.bookings.length > 0){
          let outputMessage = `${this.name.toUpperCase()} DATABASE:\n` + ('-').repeat(20) + '\n';
          let reportBookingsData = [];
          for(let roomBooking of this.bookings){
              let oneBookingData; 
              if(!roomBooking.hasOwnProperty('services')){
                  oneBookingData =  `bookingNumber - ${roomBooking.number}\nclientName - ${roomBooking.name}\nroomType - ${roomBooking.type}\nnights - ${roomBooking.nights}`;
              }
              else {
                  oneBookingData = `bookingNumber - ${roomBooking.number}\nclientName - ${roomBooking.name}\nroomType - ${roomBooking.type}\nnights - ${roomBooking.nights}\nservices: ${roomBooking.services.join(', ')}`;
              }
              reportBookingsData.push(oneBookingData);                            
          }

          outputMessage += reportBookingsData.join(`\n${('-').repeat(10)}\n`);
          return outputMessage;
      }
      else {
          return `${this.name.toUpperCase()} DATABASE:\n` + ('-').repeat(20) + '\nThere are currently no bookings.';
      }
  }
}

//in Judge must be paste without this below
// let hotel = new Hotel('HotUni', 10);
// console.log(hotel.rentARoom('Peter', 'single', 4));
// console.log(hotel.rentARoom('Robert', 'double', 4));
// console.log(hotel.rentARoom('Geroge', 'maisonette', 6));

// let hotel = new Hotel('HotUni', 10);
// hotel.rentARoom('Peter', 'single', 4);
// hotel.rentARoom('Robert', 'double', 4);
// hotel.rentARoom('Geroge', 'maisonette', 6);

// console.log(hotel.roomService(3, 'housekeeping'));
// console.log(hotel.roomService(3, 'drink'));
// console.log(hotel.roomService(2, 'room'));

// let hotel = new Hotel('HotUni', 10);

// hotel.rentARoom('Peter', 'single', 4);
// hotel.rentARoom('Robert', 'double', 4);
// hotel.rentARoom('Geroge', 'maisonette', 6);

// hotel.roomService(3, 'housekeeping');
// hotel.roomService(3, 'drink');
// hotel.roomService(2, 'room');

// console.log(hotel.report());