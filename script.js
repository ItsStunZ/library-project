// Elements
const addBookBtn = document.querySelector('#addbook-btn');
const formDialog = document.querySelector('#form-dialog');

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
    if (!title || !author || !pages) {
        alert('(!) Please make sure you input a title, author and the number of pages');
        return;
    }
    const newBook = new Book(title, author, pages, read);
    bookLibrary[crypto.randomUUID()] = newBook;

    return newBook;
}

function createCard(book) {
    const booksContainer = document.querySelector('.books-container');
    // loop through bookLibrary and display on page
    
    // Create new card
    const card = document.createElement('div');
    card.classList.add('card');
    
    // Create title header
    const titleHeader = document.createElement('h1');
    titleHeader.textContent = book._title;
    card.appendChild(titleHeader);

    // Create author header
    const authorHeader = document.createElement('h2');
    authorHeader.textContent = book._author;
    card.appendChild(authorHeader);

    // Create #pages paragraph
    const pages = document.createElement('p');
    pages.textContent = `${book._pages} pages`;
    card.appendChild(pages);

    // Create has read paragraph
    const hasRead = document.createElement('p');
    hasRead.textContent = book._read ? 'Already read' : 'Not yet read';
    card.appendChild(hasRead);

    booksContainer.appendChild(card);
}

addBookBtn.addEventListener('click', (e) => {
    // prevent defaults
    e.preventDefault();
    // close dialog
    formDialog.close();

    // get inputs
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const read = document.querySelector('#read').checked;

    console.log(read);

    // create new book
    const newBook = addBookToLibrary(title, author, pages, read);
    createCard(newBook);
})