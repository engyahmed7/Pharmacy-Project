import map from "../images/mmap.jpg";
import "../styles/About.css";

function About() {
  return (
    <>
      <div className="about">
        <div
          className="leftSide"
          style={{ backgroundImage: `url(${map})` }}
        ></div>
        <div className="rightSide">
          <h1> Branches</h1>
          <h2>ALEXANDRIA : </h2>
          <p>camshizar</p>
          <p>taram station </p>
          <p>Agamy</p>
          <p>sedigabr</p>
          <p>Sporting</p>
        </div>
      </div>
    </>
  );
}

export default About;
