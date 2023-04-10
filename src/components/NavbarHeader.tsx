import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";


export function NavbarHeader() {
  const refreshPage = ()=>{
    window.location.href="/";
 }

  return (
    <>
      <div className="collapse navbar-collapse custom-navmenu" id="main-navbar">
        <div className="container py-2 py-md-5 text-right">
          <ul className="custom-menu">
            <li className="active">
              <Link to="" onClick={refreshPage}>Home</Link>
            </li>
            <li>
              <a href="about.html">About Me</a>
            </li>
          </ul>
        </div>
      </div>
      <nav className="navbar navbar-light custom-navbar">
        <div className="container">
          <Link to="">
            <img alt="logo" className="img-fluid" src={logo} width="80px" onClick={refreshPage} />
          </Link>
          <a
            href="#top"
            className="burger ml-auto"
            data-toggle="collapse"
            data-target="#main-navbar"
          >
            <span></span>
          </a>
        </div>
      </nav>
    </>
  );
}
