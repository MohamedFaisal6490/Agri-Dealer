import Navbar from "../source/Navbar";
import "../source/userData.css";
import { useState } from "react";
function UserData() {
  const [holder, setHolder] = useState("");
  const [place, setPlace] = useState("");
  const [type, setType] = useState("");
  const [quantity, setQuantity] = useState("");
  const [quality, setQuality] = useState("");

  return (
    <>
      <Navbar />
      <div className="heading">
        <h1>Stock Update</h1>
      </div>
      <div className="UserInput">
        <div className="inputBoxOne">
          <form className="formType">
            <input
              className="input"
              type="text"
              Name="holder"
              placeholder="Stock Holder Name"
              required
              onChange={(e) => setHolder(e.target.value)}
              value={holder}
            />
            <input
              className="input"
              type="taxt"
              placeholder="place of stock Eg:'thanjavur'"
              required
              onChange={(e) => setPlace(e.target.value)}
              value={place}
            />
            <input
              className="input"
              type="taxt"
              placeholder="Type of Rice Eg:'Ponni'"
              required
              onChange={(e) => setType(e.target.value)}
              value={type}
            />
            <input
              className="input"
              type="text"
              placeholder="Quantity in Kg"
              required
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
            <input
              className="input"
              type="Text"
              placeholder="quality Eg: 'Good'"
              required
              onChange={(e) => setQuality(e.target.value)}
              value={quality}
            />
            <button>Update</button>
          </form>
        </div>

        <div className="updateBox">
          <h1>Updates</h1>
          <div className="UserForm">
            <p>Name of the stock holder :{holder}</p>
            <p>Place of stock :{place}</p>
            <p>Type of Rice :{type}</p>
            <p>Quantity :{quantity}</p>
            <p>Quality :{quality}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserData;
