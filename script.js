
let myLibrary = [];
const booksContainer = document.querySelector(".books");

function Book(title, author, pages, read, index) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.index = index;

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

function displayOneBook(book, index) {
    let content = document.createElement('div');
    content.setAttribute('data-index', index);

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

    // <input onclick="newBook()" type="button" value="New Book">
    let removeButton = document.createElement('input');
    removeButton.setAttribute('type', 'button');
    removeButton.setAttribute('value', 'remove');
    removeButton.setAttribute('onclick', `removeBook(${index})`);
    content.appendChild(removeButton);

    booksContainer.appendChild(content);
}

function displayBooks() {
    let index = 0;
    myLibrary.forEach(book => {
        displayOneBook(book, index);
        index++;
    })
}

function newBook() {
    if (btitle.value === "") {
        return alert("please fill the title");
    }
    if (bauthor.value === "") {
        return alert("please fill the author");
    }
    if (bpages.value === "" || bpages < 1) {
        return alert("please fill the pages");
    }

    const read = document.getElementById("bread").checked;
    const index = myLibrary.length;

    const book = new Book(btitle.value, bauthor.value, bpages.value, read, index);
    addBookToLibrary(book);
    displayOneBook(book, index);
}

function removeBook(index) {
    myLibrary.splice(index, 1);
    
    const toRemove = booksContainer.querySelector(`[data-index="${index}"]`)
    booksContainer.removeChild(toRemove);
}

const book1 = new Book("some title", "some author", 234, false);
addBookToLibrary(book1);
const book2 = new Book("some other title", "some other author", 342, true);
addBookToLibrary(book2);

displayBooks();
