class BookCollection {
    constructor(shelfGenre, room, shelfCapacity) {
        this.room = room;
        this.shelfGenre = shelfGenre;
        this.shelfCapacity = shelfCapacity;
        this.shelf = [];

        return this;
    }

    get room() {
        return this._room;
    }
    set room(room) {
        if (room !== 'livingRoom' && room !== 'bedRoom' && room != 'closed') {
            throw `Cannot have book shelf in ${room}`;
        }

        this._room = room;
    }

    get shelfCondition() {
        return this.shelfCapacity - this.shelf.length;
    }

    addBook(bookName, bookAuthor, genre) {        
        //if(this.shelf.length === this.shelfCapacity) {
        if (this.shelfCondition === 0) {
            this.shelf.shift();
        }
        
        let book = {bookName, bookAuthor};
        if (genre) {
            book.genre = genre;
        }
        
        this.shelf.push(book);
        this.shelf.sort((a,b) => a.bookAuthor.localeCompare(b.bookAuthor));

        return this;
    }

    throwAwayBook(bookName) {
        this.shelf = this.shelf.filter(b => b.bookName !== bookName);

        return this;
    }

    showBooks(genre) {
        let genreBooks = this.shelf.filter(b => b.genre === genre).map(b => `\uD83D\uDCD6 ${b.bookAuthor} - "${b.bookName}"`);
        
        return `Results for search "${genre}":\n` + genreBooks.join('\n');
    }

    toString() {
        let booksInShelf = "It's an empty shelf";
        if (this.shelf.length > 0) {
            let books = this.shelf.map(b => `\uD83D\uDCD6 "${b.bookName}" - ${b.bookAuthor}`);
            booksInShelf = `"${this.shelfGenre}" shelf in ${this.room} contains:\n` + books.join('\n');     
        }
        
        return booksInShelf;
    }
}

let livingRoom = new BookCollection("Programming", "livingRoom", 5)
    .addBook("Introduction to Programming with C#", "Svetlin Nakov")
    .addBook("Introduction to Programming with Java", "Svetlin Nakov")
    .addBook("Programming for .NET Framework", "Svetlin Nakov");
console.log(livingRoom.toString());

let bedRoom = new BookCollection('Mixed', 'bedRoom', 5);
bedRoom.addBook("John Adams", "David McCullough", "history");
bedRoom.addBook("The Guns of August", "Cuentos para pensar", "history");
bedRoom.addBook("Atlas of Remote Islands", "Judith Schalansky");
bedRoom.addBook("Paddle-to-the-Sea", "Holling Clancy Holling");
console.log("Shelf's capacity: " + bedRoom.shelfCondition);
console.log(bedRoom.showBooks("history"));

let garden = new BookCollection("Programming", "garden");
