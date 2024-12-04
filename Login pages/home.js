function loadPage(page) {
    const content = document.getElementById("content");
    switch (page) {
        case 'home':
            content.innerHTML = "<p>Welcome to the Online Bookstore! Select a category from the left to view available books.</p>";
            break;
        case 'login':
            content.innerHTML = `
                <h2>Login</h2>
                <form>
                    <label for="username">Username:</label>
                    <input type="text" id="username" name="username" required>
                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password" required>
                    <button type="submit">Login</button>
                </form>
            `;
            break;
        case 'registration':
            content.innerHTML = `
                <h2>Registration</h2>
                <form>
                    <label for="full-name">Full Name:</label>
                    <input type="text" id="full-name" name="full-name" required>
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required>
                    <label for="username">Username:</label>
                    <input type="text" id="username" name="username" required>
                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password" required>
                    <button type="submit">Register</button>
                </form>
            `;
            break;
        case 'catalogue':
            loadCatalogue('CSE');
            break;
        case 'cart':
            content.innerHTML = "<p>Your cart is empty. Add books to your cart to proceed to checkout.</p>";
            break;
        default:
            content.innerHTML = "<p>Welcome to the Online Bookstore!</p>";
            break;
    }
}

function loadCatalogue(category) {
    const content = document.getElementById("content");

    const books = [
        {
            title: 'Book 1 in ' + category,
            author: 'Author 1',
            publisher: 'Publisher 1',
            price: '$10.99'
        },
        {
            title: 'Book 2 in ' + category,
            author: 'Author 2',
            publisher: 'Publisher 2',
            price: '$12.99'
        },
        {
            title: 'Book 3 in ' + category,
            author: 'Author 3',
            publisher: 'Publisher 3',
            price: '$15.99'
        },
        {
            title: 'Book 3 in ' + category,
            author: 'Author 3',
            publisher: 'Publisher 3',
            price: '$15.99'
        },
        {
            title: 'Book 3 in ' + category,
            author: 'Author 3',
            publisher: 'Publisher 3',
            price: '$15.99'
        },
    ];

    let tableContent = '<h2>' + category + ' Books</h2>';
    tableContent += '<table>';
    tableContent += '<tr><th>Title</th><th>Author</th><th>Publisher</th><th>Price</th><th>Action</th></tr>';

    books.forEach(book => {
        tableContent += `
            <tr>
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.publisher}</td>
                <td>${book.price}</td>
                <td><button onclick="addToCart('${book.title}')">Add to Cart</button></td>
            </tr>
        `;
    });

    tableContent += '</table>';
    content.innerHTML = tableContent;
}

function addToCart(bookTitle) {
    alert(bookTitle + " added to cart!");
}
