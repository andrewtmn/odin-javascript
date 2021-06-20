function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        let readMsg = "";
        if (read) {
            readMsg = "has been read";
        } else {
            readMsg = "not read yet"
        }
        return this.title + " by " + this.author + 
                ", " + this.pages + "pages" + ", " + readMsg;
    }
}

const book1 = new Book("asd", "asds", 23, false);
console.log(book1.info());
