
const books = [
    { title: 'Diabolica', author: 'S.J. Kincaid', link: 'book1.html' },
    { title: 'Book 2', author: 'Author Name 2', link: 'book2.html' },
    { title: 'Book 3', author: 'Author Name 3', link: 'book3.html' },
    { title: 'Book 4', author: 'Author Name 4', link: 'book4.html' },
    { title: 'Advanced Programming', author: 'Jane Doe', link: 'book5.html' },
    { title: 'Biology 101', author: 'John Smith', link: 'book6.html' }
];


function searchBooks() {
    const query = document.getElementById('searchBar').value.toLowerCase(); 
    const searchResults = document.getElementById('searchResults');
    searchResults.innerHTML = ''; 
    const filteredBooks = books.filter(book => 
        book.title.toLowerCase().includes(query) || book.author.toLowerCase().includes(query)
    );

    if (filteredBooks.length > 0) {
       
        filteredBooks.forEach(book => {
            const bookDiv = document.createElement('div');
            bookDiv.classList.add('search-result');
            bookDiv.innerHTML = `
                <a href="${book.link}">
                    <h3>${book.title}</h3>
                    <p>by ${book.author}</p>
                </a>
            `;
            searchResults.appendChild(bookDiv);
        });
    } else {
      
        searchResults.innerHTML = '<p>No books found matching your search.</p>';
    }
}
