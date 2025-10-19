import { Routes, Route } from "react-router";
import Layout from "./Layout";
import Books from "./Books";
import BookDetails from "./BookDetails";

// Returning route components to allow for easy navigation through pages on UI
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Books />} />
        <Route path="/books" element={<Books />} />
        <Route path="/books/:id" element={<BookDetails />} />
      </Route>
    </Routes>
  );
}
