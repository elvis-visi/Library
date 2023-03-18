
//Store Book objects
let myLibrary = [];

function Book(title,author,pages,isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;

}

//single instance of info function will be shared between all Books objects
Book.prototype.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.isRead ? "Read" : "not read yet"}`;
}

const book = new Book("My Book","sevi",500,true)
console.log(book.info())
console.log("book: ", book)

function addBookToLibrary() {
  //take user’s input and store the new book objects into an array.
  let title = prompt("Enter book title:");
  let author = prompt("Enter book author:");
  let pages = prompt("Enter number of pages:");
  let isRead = confirm("Have you read this book?");

  let newBook = new Book(title, author, pages, isRead);
  myLibrary.push(newBook);

}

//addBookToLibrary()

