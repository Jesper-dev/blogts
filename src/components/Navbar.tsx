import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <h1>Jesper Pettersson</h1>
      <div className="linkContainer">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <a
          href="https://github.com/Jesper-dev"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
