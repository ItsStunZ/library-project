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

function displayBooks() {
    const booksContainer = document.querySelector('.books_container');
    // loop through bookLibrary and display on page
    for (let id in bookLibrary) {
        // Create new card
        const card = document.createElement('div');
        card.classList.add('.card');
        
        // Create title header
        const titleHeader = document.createElement('h1');
        titleHeader.textContent = bookLibrary[id]._title;
        card.appendChild(titleHeader);

        // Create author header
        const authorHeader = document.createElement('h2');
        authorHeader.textContent = bookLibrary[id]._author;
        card.appendChild(authorHeader);

        // Create #pages paragraph
        const pages = document.createElement('p');
        pages.textContent = bookLibrary[id]._pages;
        card.appendChild(pages);

        // Create has read paragraph
        const hasRead = document.createElement('p');
        hasRead.textContent = bookLibrary[id]._read ? 'Already read' : 'Not yet read';
        card.appendChild(hasRead);

        booksContainer.appendChild(card);
    }
}


// create some books for debugging
addBookToLibrary('Bossypants', 'Tina Fey', 275, false);
addBookToLibrary("Are You There, Vodka? It's Me, Chelsea", 'Chelsea Handler', 256, false);
addBookToLibrary('Calypso', 'David Sedaris', 272, true);

displayBooks();