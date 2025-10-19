import { Link, NavLink } from "react-router";

export default function Navbar() {
  return (
    <header>
      <Link to="/books">
        <img src="/books.png" alt="Book Buddy Logo" />
        <p>Book Buddy</p>
      </Link>
      <nav>
        <NavLink to="/books">Books</NavLink>
        <NavLink to="/login">Login</NavLink>
      </nav>
    </header>
  );
}
