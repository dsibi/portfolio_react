export function Navbar() {
  return (
    <>
      <div className="collapse navbar-collapse custom-navmenu" id="main-navbar">
        <div className="container py-2 py-md-5 text-right">
          <ul className="custom-menu">
            <li className="active"><a href="index.html">Home</a></li>
            <li><a href="about.html">About Me</a></li>
          </ul>
        </div>
      </div>
      <nav className="navbar navbar-light custom-navbar">
        <div className="container">
          <a href="index.html">
            <img alt="logo" className="img-fluid" src="./favicon/android-chrome-192x192.png" width="80px" />
          </a>
          <a href="#top" className="burger ml-auto" data-toggle="collapse" data-target="#main-navbar">
            <span></span>
          </a>
        </div>
      </nav>
    </>
  );
}