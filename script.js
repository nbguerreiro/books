
let myLibrary = [];
const booksContainer = document.querySelector(".books");

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function () {
        if (this.read === true) {
            readTxt = "already read"
        } else {
            readTxt = "not read yet"
        }
        return `${this.title} by ${this.author}, ${this.pages} pages, ${readTxt}`;
    }
}


function addBookToLibrary(book) {
    if (book !== undefined) {
        myLibrary.push(book);
    }
}

function displayBooks() {
    let bookIndex = 0;
    myLibrary.forEach(book => {
        let content = document.createElement('div');
        content.classList.add(`book-${bookIndex}`)
        bookIndex++;

        let title = document.createElement('p');
        title.textContent = "title: " + book.title;
        content.appendChild(title);

        let author = document.createElement('p');
        author.textContent = "author: " + book.author;
        content.appendChild(author);

        let pages = document.createElement('p');
        pages.textContent = "pages: " + book.pages;
        content.appendChild(pages);

        let read = document.createElement('p');
        read.textContent = "read: " + book.read;
        content.appendChild(read);

        let info = document.createElement('p');
        info.textContent = "info: " + book.info();
        content.appendChild(info);

        booksContainer.appendChild(content);

        // console.log(book.title);
        // return book.title;
    })
}


const book1 = new Book("some title", "some author", 234, false);
addBookToLibrary(book1);
const book2 = new Book("some other title", "some other author", 342, true);
addBookToLibrary(book2);

displayBooks();
