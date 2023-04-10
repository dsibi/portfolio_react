import { Navbar } from "./components/Navbar";
import { HeaderFilter } from "./components/HeaderFilter";

import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <>
      <Navbar />
      <main id="main">
        <div className="site-section site-portfolio">
          <div className="container">
            <HeaderFilter />
            <Outlet />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
