const main = document.getElementsByClassName("main")
const addBook = document.getElementById("add")


const Book = {
    title: String,
    author: String,
    pages: 0,
}

let library = [{title: "Harry Potter", author: "JK Rowling", pages: 300}, {title: "Diary of a Wimpy Kid", author: "test", pages: 217}, {title: "Test", author: "Test", pages: 200}]

function book() {
    let newDiv = document.createElement("div")

    library.forEach ( book => {
        newDiv.textContent = book
    })
}

function addBookToLibrary() {

}