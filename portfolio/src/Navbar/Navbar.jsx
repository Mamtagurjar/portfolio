import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <div className="logo">
          <svg
            width="35"
            height="43"
            viewBox="0 0 35 43"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 2H35" stroke="white" strokeWidth="4" />
            <path d="M0 40.5518H35" stroke="white" strokeWidth="4" />
            <path
              d="M21.4375 2L7 20.8276L21.4375 41"
              stroke="white"
              strokeWidth="4"
            />
          </svg>
        </div>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#lab">Lab</a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
