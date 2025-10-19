import { Routes, Route } from "react-router";
import Layout from "./Layout";
import Books from "./Books";

// Returning route components to allow for easy navigation through pages on UI
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/books" element={<Books />} />
        <Route path="/books" element={<Books />} />
        <Route path="*" element={<h1>404</h1>} />
      </Route>
    </Routes>
  );
}
