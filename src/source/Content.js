import contentImg from "../images/contentImg.jpg";
import "./content.css";
function Content() {
  return (
    <div className="content">
      <div className="imgSection">
        <img src={contentImg} alt="contentImg" />
      </div>
      <div className="Para">
        <h1>About This Webpage</h1>
        <p>
          Agriculture plays a very vital role in our life. Without agriculture,
          the existence of human beings is not possible as it is the main source
          of our food supply to sustain on the earth and it also helps to grow
          our economy across the world.
        </p>
      </div>
    </div>
  );
}
export default Content;
