const books = document.querySelector(".books")
const addButton = document.getElementById("add")

addButton.addEventListener("click", function () {
    addBookToLibrary();
    books.innerHTML = book();
})

let Book = {
    title: "",
    author: "",
    pageNumber: 0,
}

let book1 = Object.create(Book)
book1.title = "Harry Potter"
book1.author = "JK Rowling"
book1.pageNumber = 330

let book2 = Object.create(Book)
book2.title = "Family Guy"
book2.author = "Seth Farlane"
book2.pageNumber = 500

let library = [book1, book2]

function book() {
    let table = "<table><tr><th>Title</th><th>Author</th><th>Page Numbers</th></tr>"
    
    for (i = 0; i < library.length; i++) {
        table += "<tr><td>" + library[i].title + "</td><td>" + library[i].author + "</td><td>" + library[i].pageNumber + "</td></tr>"
    }

    table += "</table>"
    return table
}



function addBookToLibrary() {
    let title = document.getElementById("title").value
    let author = document.getElementById("author").value
    let pageNumber = document.getElementById("pages").value

    let newBook = Object.create(Book)
    newBook.title = title
    newBook.author = author
    newBook.pageNumber = pageNumber
    
    library.push(newBook)
}