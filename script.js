
const books = [
    { title: 'Diabolica', author: 'S.J. Kincaid', link: 'book1.html' },
    { title: 'Ion', author: 'Liviu Rebreanu', link: 'ion.html' },
    { title: 'Baltagul', author: 'Mihail Sadoveanu', link: 'baltagul.html' },
    { title: 'Moara cu noroc', author: 'Ioan Slavici', link: 'moaracunoroc.html' },
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
      
        searchResults.innerHTML = '<p>Nu s-au găsit cărți care să corespundă căutării dvs.</p>';
    }
}
