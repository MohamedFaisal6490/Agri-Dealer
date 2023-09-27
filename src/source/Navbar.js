import "./navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="navBar">
      <Link to="/">
        <h1>Farmer Tech</h1>
      </Link>
      <div className="navBtn">
        <Link to="/SignIn" className="link">
          Sign Up
        </Link>
      </div>
    </div>
  );
}
export default Navbar;
