class CheckingAccount {
    constructor(clientId, email, firstName, lastName) {
        this.clientId = clientId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get clientId() { return this._clientId; }
    set clientId(clientId) {
        let pattern = /^\d{6}$/;
        if (!pattern.test(clientId)) {
            throw new TypeError('Client ID must be a 6-digit number');
        }

        this._clientId = clientId;
        //console.log(this._clientId)
        //this._clientId = Number(clientId);
    }

    get email() { return this._email; }
    set email(email) {
        let pattern = /^[A-Za-z0-9]+@[A-Za-z_.]+$/;
        if (!pattern.test(email)) {
            throw new TypeError('Invalid e-mail');
        }

        this._email = email;
    }

    get firstName() { return this._firstName; }
    set firstName(firstName) {
        if (firstName.length <= 3 || firstName.length >= 20) {
            throw new TypeError('First name must be between 3 and 20 characters long');
        }
        
        let pattern = /^[A-Za-z]+$/;
        if (!pattern.test(firstName)) {
            throw new TypeError('First name must contain only Latin characters');
        }

        this._firstName = firstName;
    }

    get lastName() { return this._lastName; }
    set lastName(lastName) {
        if (lastName.length <= 3 || lastName.length >= 20) {
            throw new TypeError('Last name must be between 3 and 20 characters long');
        }
        
        let pattern = /^[A-Za-z]+$/;
        if (!pattern.test(lastName)) {
            throw new TypeError('Last name must contain only Latin characters');
        }

        this._lastName = lastName;
    }
}

let acc = new CheckingAccount('1314', 'ivan@some.com', 'Ivan', 'Petrov')
 //let acc = new CheckingAccount('131455', 'ivan@', 'Ivan', 'Petrov')
 //let acc = new CheckingAccount('131455', 'ivan@some.com', 'I', 'Petrov')
// let acc = new CheckingAccount('131455', 'ivan@some.com', 'Ivan', 'P3trov')
