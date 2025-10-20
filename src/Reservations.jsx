import { Link } from "react-router";
import useMutation from "./api/useMutation";

export default function Reservations({ reservations }) {
  return (
    <>
      <h2>Reservations</h2>
      {reservations.length > 0 ? (
        <ul>
          {reservations.map((reservation) => (
            <Reservation key={reservation.id} reservation={reservation} />
          ))}
        </ul>
      ) : (
        <p>
          You do not currently have any reservations. See our{" "}
          <Link to="/books">collection</Link>!
        </p>
      )}
    </>
  );
}

function Reservation({ reservation }) {
  const { mutate: returnBook } = useMutation(
    "DELETE",
    `/reservations/${reservation.id}`,
    ["account"]
  );
  return (
    <li className="reservation" key={reservation.id}>
      <Link to={`/books/${reservation.bookid}`}>{reservation.title}</Link>
      <p>{reservation.author}</p>
      <button onClick={() => returnBook()}>Return this book</button>
    </li>
  );
}
