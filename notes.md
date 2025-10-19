===
Page Layout
===

/, /books - list of all books in catalog (Main page)

- each book links to its individual page
- search bar to .find a particular book
- - new array to display

/books/:id - details about the specific book (individual page)

- if the user is logged in, show a "Reserve" button for the user to check out this book
- if the book is already reserved, the button should be disabled

/account - profile page

- if the user is not logged in, show them a link to register or log in
- if the user is logged in, then show their account details such as name and email
- show a list of all reservations the user has made
- - in this list, also include a button for users to return the reserved book

/login

- input username/password, get token for authorization

/register

- input username/password/email, get profile for authentication
