function serviceBooks(){
    //const baseUrl = "https://baas.kinvey.com/appdata/kid_rkOE5IY5f/books";
    const baseUrl = "https://baas.kinvey.com/appdata/kid_H1y9kL-_N/books";
    const auth = `Basic ${btoa("guest:guest")}`;
    const headers = {"Authorization": auth, "Content-Type": "application/json"};
    //loadBooks();
    $("#add").click(addBook);
    $("#load").click(loadBooks);

    async function loadBooks(){
        let $books = $("#books");
        $books.empty();
        let books = await $.ajax({
            url: baseUrl,
            method: "GET",
            headers
        });        
        for (let book of books){
            $books.append(createBook(book));
        }        
    }

    async function addBook(){
        let [title, author, isbn] = $("#newBooksFiles input").map((i, item) => $(item).val());
        
        if(title && author && isbn){          
            let bookData = {title, author, isbn};
            //$("#newBooksFiles > input").val("");
            $("#newBooksFiles input").val("");            
            let book = await $.ajax({
                method: "POST",
                url: baseUrl,
                headers,
                data: JSON.stringify(bookData)
            });            
            let $liBook = createBook(book);
            $("#books").append($liBook);
        }
    }

    function createBook(book){
        let $li = $("<li>");
        let $span = $(`<span>Title: ${book.title}; Author: ${book.author}; ISBN: ${book.isbn};</span>`);
        let $a = $('<a href="#">[Delete]</a>').click(() => {
            $.ajax({
                method: "DELETE",
                url: baseUrl + "/" + book._id,
                headers
            })
            .then(() => $li.remove());
        });
        $span.append($a);
        $li.append($span);
        return $li;
    }
}