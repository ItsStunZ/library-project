const bookLibrary = []; // All books are stored here


function Book(title, author, pages, read) {
    if (!new.target) {
        throw Error("You must have the 'new' operator before calling Book");
    }

    this._title = title;
    this._author = author;
    this._pages = pages;
    this._read = read;
}

function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    bookLibrary[crypto.randomUUID()] = newBook;
}