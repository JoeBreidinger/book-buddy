export default function Books() {
  const books = [
    {
      id: 1,
      title: "Do",
      author: "Re",
      description: "Mi",
      coverimage: "/books.png",
    },
    {
      id: 2,
      title: "Fa",
      author: "So",
      description: "La",
      coverimage: "/books.png",
    },
  ];
  return (
    <ul>
      {books.map((book) => (
        <Book book={book} key={book.id} />
      ))}
    </ul>
  );
}

function Book({ book }) {
  return (
    <li>
      <img src={book.coverimage} alt={book.title} />
      <h2>{book.title}</h2>
      <p>{book.author}</p>
      <p>{book.description}</p>
    </li>
  );
}
