
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
const bookTwo = new Book("Lezha","Riku",200,false)
const bookThree = new Book("Tirana","sevi",120,true)
myLibrary.push(book)
myLibrary.push(bookTwo)
myLibrary.push(bookThree)
console.log("library: ",myLibrary)


function displayBooks(){
    const mainDiv = document.querySelector(".gridContainer");
    mainDiv.textContent="";

    //create a div(card) for each book in the library
    for(let book of myLibrary)
    {
        const card = document.createElement("div");
        card.classList.add("card");

        const title = document.createElement("h2");
        title.textContent = book.title;
        card.appendChild(title);

        let author = document.createElement("p");
        author.textContent = `Author: ${book.author}`;
        card.appendChild(author);

        let pages = document.createElement("p");
        pages.textContent = `Pages: ${book.pages}`;
        card.appendChild(pages);

        let isRead = document.createElement("p");
        isRead.textContent = book.isRead ? "Read" : "Not read yet";
        card.appendChild(isRead);

        mainDiv.appendChild(card);
    }


}


const newBookBtn = document.getElementById("new-book-btn");
const modal = document.querySelector(".modal");

newBookBtn.addEventListener("click", () => {
  modal.style.display = "block";
});


/*function addBookToLibrary() {
    let title = prompt("Enter book title:");
    let author = prompt("Enter book author:");
    let pages = prompt("Enter number of pages:");
    let isRead = confirm("Have you read this book?");
  
    let newBook = new Book(title, author, pages, isRead);
    myLibrary.push(newBook);
    displayBooks()
    
  }*/

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent form from submitting and refreshing the page

  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const isRead = document.getElementById("isRead").checked;

  const newBook = new Book(title, author, pages, isRead);
  myLibrary.push(newBook);
  displayBooks();

  form.reset();

  modal.style.display = "none"; // Hide the modal after submitting the form
});


displayBooks()
//addBookToLibrary()

