import { Link } from "react-router-dom";
import signImge from "../images/signIn.jpg";
import "../source/signIn.css";
import { useState } from "react";
function SignIn() {
  const [message, setMessage] = useState("");
  const [messageTwo, setMessageTwo] = useState("");
  const handleChange = (event) => {
    setMessage(event.target.value);
    console.log(event.target.value);
  };
  return (
    <div classname="SignInPage">
      <img src={signImge} alt="SignInBackground" />
      <div classname="UserInp">
        <div classname="Inputs">
          <form>
            <label>Sign Up</label>
            <input
              type="text"
              placeholder="UserName Eg:Godwin_Thomas"
              onChange={handleChange}
              value={message}
              required
            />
            <input type="number" placeholder="Aadhar Number" />

            <h1>{messageTwo}</h1>
            <input type="password" placeholder="password Eg:123456" />
            <Link to="/Content">
              <button>Sign In</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
