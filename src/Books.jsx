import useQuery from "./api/useQuery";

export default function Books() {
  const { data: books, loading, error } = useQuery("/books", "books");

  if (loading || !books) return <p>Loading...</p>;
  if (error) return <p>Sorry! {error}</p>;

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
