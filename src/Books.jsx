import { Link } from "react-router";
import useQuery from "./api/useQuery";
import { useState } from "react";

export default function Books() {
  const { data: books, loading, error } = useQuery("/books", "books");

  const [searchTerm, setSearchTerm] = useState("");
  const updateSearchTerm = (formData) => {
    const search = formData.get("search");
    setSearchTerm(search);
  };
  const filteredBooks = books?.filter((book) =>
    (book.title + book.author)
      .toLowerCase()
      .includes(searchTerm.toLocaleLowerCase())
  );

  if (loading || !books) return <p>Loading...</p>;
  if (error) return <p>Sorry! {error}</p>;

  return (
    <>
      <h1>Catalog</h1>
      <form action={updateSearchTerm}>
        <input type="text" name="search" aria-label="search" />
        <button>Search</button>
      </form>
      <ul>
        {filteredBooks.map((book) => (
          <Book book={book} key={book.id} />
        ))}
      </ul>
    </>
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
