import { Outlet } from "react-router";
import Navbar from "./Navbar";

export default function Layout() {
  return (
    <div className="base">
      <Navbar />
      <main className="books">
        <Outlet />
      </main>
    </div>
  );
}
