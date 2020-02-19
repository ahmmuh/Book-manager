// book constructor

function Book(title, author, sbn) {
  this.title = title;
  this.author = author;
  this.sbn = sbn;
}

// ui function constructor, everything for UI
function UI() {}

// add book to the list
UI.prototype.addBook = function(book) {
  const list = document.querySelector("#bookList");
  const row = document.createElement("tr");
  row.innerHTML = `
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.sbn}</td>
  <td><a href="#" class="delete">X</a> </td>
  `;
  list.appendChild(row);
};

// clear fields

UI.prototype.clearForm = function(book) {
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("sbn").value = "";
};

//remove book

UI.prototype.deleteBook = function(target) {
  if (target.className === "delete") {
    target.parentElement.parentElement.remove();
  }
};
// add event listener
document.getElementById("book-form").addEventListener("submit", function(e) {
  const title = document.getElementById("title").value,
    author = document.getElementById("author").value,
    sbn = document.getElementById("sbn").value;

  // instantiate book object
  const book = new Book(title, author, sbn);
  e.preventDefault();
  // instantiate UI
  const ui = new UI();
  ui.addBook(book);
  ui.clearForm(book);
});

document.getElementById("bookList").addEventListener("click", function(e) {
  const ui = new UI();
  ui.deleteBook(e.target);
  
});
