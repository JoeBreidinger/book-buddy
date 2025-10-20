import { Link, NavLink } from "react-router";
import { useAuth } from "./auth/AuthContext";

export default function Navbar() {
  const { token, logout } = useAuth();

  return (
    <header>
      <Link to="/books">
        <img src="/books.png" alt="Book Buddy Logo" />
        <p>Book Buddy</p>
      </Link>
      <nav>
        <NavLink to="/books">Books</NavLink>
        {token ? (
          <>
            <NavLink to="/account">Account</NavLink>
            <a href="#" onClick={logout}>
              Log Out
            </a>
          </>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </nav>
    </header>
  );
}
