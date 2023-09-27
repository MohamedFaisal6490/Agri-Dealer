import Navbar from "../source/Navbar";
import logoTwo from "../images/bg3.jpg";
import "../source/usercontent.css";
import Footer from "../source/Footer";
import { Link } from "react-router-dom";
function UserContent() {
  return (
    <>
      <Navbar />
      <div className="userContent">
        <img src={logoTwo} alt="BackGroundImage" />
        <div className="ButtonSection">
          <div className="buttonOne">
            <h2>Rice material</h2>
            <p>
              This Rice section is for agri Farmers to put your stock product,
              Quantity, Product Price, Contact Number. To contact the Dealers
            </p>
            <Link to="/UserData">
              <button>Take In</button>
            </Link>
          </div>

          <div className="buttonTwo">
            <h2>Milk material</h2>
            <p>
              This Milk section is for agri Farmers to put your stock product,
              Quantity, Product Price, Contact Number. To contact the Dealers
            </p>
            <button>Take In</button>
          </div>

          <div className="buttonThree">
            <h2>Cotton material</h2>
            <p>
              This Cotton section is for agri Farmers to put your stock product,
              Quantity, Product Price, Contact Number. To contact the Dealers
            </p>
            <button>Take In</button>
          </div>
        </div>
      </div>
      <Footer className="footer" />
    </>
  );
}
export default UserContent;
