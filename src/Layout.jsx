import { Outlet } from "react-router";

export default function Layout() {
  return (
    <>
      <header>Navbar</header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
