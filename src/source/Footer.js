import "./footer.css";
import logoOne from "../images/logo1.png";
import logoTwo from "../images/logo2.png";
function Footer() {
  return (
    <div className="footerContent">
      <div className="FooterTitle">
        <h1>DEVELOPED BY</h1>
      </div>

      <div className="LogoSection">
        <div className="footer">
          <div className="logoOne">
            <img src={logoOne} alt="footerLogoOne" />
            <p>AAMEC</p>
          </div>
          <div className="logotwo">
            <img src={logoTwo} alt="footerLogoTwo" />
            <p>EDC</p>
          </div>
        </div>

        <div className="address">
          <h2>Contact Us</h2>
          <h3>Anjalai Ammal Mahalingam Engg College-koyilvenni</h3>
          <p>Email:mohamedfaisal6490@gmail.com</p>
        </div>
      </div>
    </div>
  );
}
export default Footer;
