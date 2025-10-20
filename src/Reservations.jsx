import { Link } from "react-router";

export default function Reservations({ reservations }) {
  return (
    <>
      <h2>Reservations</h2>
      <ul>
        {reservations.map((reservation) => (
          <li key={reservation.id}>
            <Link to={`/books/${reservation.bookid}`}>{reservation.title}</Link>
            <p>{reservation.author}</p>
            <button>Return this book</button>
          </li>
        ))}
      </ul>
    </>
  );
}
