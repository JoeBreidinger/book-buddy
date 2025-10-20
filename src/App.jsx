import { Routes, Route } from "react-router";
import Layout from "./Layout";
import Books from "./Books";
import BookDetails from "./BookDetails";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Account from "./Account";

// Returning route components to allow for easy navigation through pages on UI
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Books />} />
        <Route path="/books" element={<Books />} />
        <Route path="/books/:id" element={<BookDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/account" element={<Account />} />
        <Route path="/login" element={<h1>404: Page not found</h1>} />
      </Route>
    </Routes>  
  );
}
