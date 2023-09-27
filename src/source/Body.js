import { Link } from "react-router-dom";
import bodyImg from "../images/bodyImg.jpg";
import "./body.css";
function Body() {
  return (
    <div className="Body">
      <div className="ImgSection">
        <img src={bodyImg} alt="BodyImage" />
      </div>
      <div className="bodyContent">
        <h1>Agri Dealer</h1>
        <p>WE ARE A FARMER'S DEALING FRIENDS</p>
        <Link to="/Content">
          <button>Stock</button>
        </Link>
      </div>
    </div>
  );
}
export default Body;
