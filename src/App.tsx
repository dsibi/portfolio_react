function App() {
  return (
    <>
      <div className="collapse navbar-collapse custom-navmenu" id="main-navbar">
        <div className="container py-2 py-md-5">
          {/* style="text-align: end" */}
          <ul className="custom-menu">
            <li className="active"><a href="index.html">Home</a></li>
            <li><a href="about.html">About Me</a></li>
          </ul>
        </div>
      </div>
      <nav className="navbar navbar-light custom-navbar">
        <div className="container">
          {/* <a href="index.html"><img className="img-fluid" src="img/favicon/android-chrome-192x192.png" width="80px"></a> */}
          <a href="#" className="burger" data-toggle="collapse" data-target="#main-navbar">
            <span></span>
          </a>
        </div>
      </nav>
    </>

  );
}

export default App;
