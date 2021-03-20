
function Books(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function(){
        if (this.read === true) {
           readTxt = "already read" 
        } else {
            readTxt = "not read yet"
        }
        return `${this.title} by ${this.author}, ${this.pages} pages, ${readTxt}`;
    }
}



