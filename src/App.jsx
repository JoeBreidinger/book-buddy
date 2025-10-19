import { Routes, Route } from "react-router";
import Layout from "./Layout";

// Returning route components to allow for easy navigation through pages on UI
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="*" element={<h1>404</h1>} />
      </Route>
    </Routes>
  );
}
