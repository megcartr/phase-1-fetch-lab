function fetchBooks() {
  const books = fetch("https://anapioficeandfire.com/api/books")
  .then((response) => response.json())
  .then((json) => renderBooks(json))
 return books
}

function renderBooks(books) {
  document.addEventListener('DOMContentLoaded', function() {
    fetchBooks()
})
}

