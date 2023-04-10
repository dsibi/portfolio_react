import { NavbarHeader } from "./components/NavbarHeader";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <>
      <NavbarHeader />
      <main id="main">
        <div className="site-section site-portfolio">
          <div className="container">
            <Outlet />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
