import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <>
      <section>
        <div className="dropdown"></div>
        <h3>AstroChart</h3>
      </section>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/create-chart"}>Create chart</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
