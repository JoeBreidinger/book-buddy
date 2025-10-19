import { Link } from "react-router";
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
      <Link to={`/books/${book.id}`}>
        <img src={book.coverimage} alt={book.title} />
      </Link>
      <Link to={`/books/${book.id}`}>
        <h2>{book.title}</h2>
      </Link>
      <p>{book.author}</p>
      <p>{book.description}</p>
    </li>
  );
}
