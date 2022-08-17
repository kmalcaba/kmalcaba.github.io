import "./Hero.scss";
import { ContainerWrapper, MotionWrapper } from "../../wrapper";
import HighlightLink from "../HighlightLink/HighlightLink";

function Hero() {
  return (
    <div className="hero">
      <h1>👋 Hi, I'm Kirsten!</h1>
      <div className="hero-content">
        <p>
          I am a web developer based in BC, Canada. I have 1.5 YOE in{" "}
          <span>ReactJS, Redux, JavaScript</span>, where I{" "}
          <span>collaborated with teams</span> in building and testing{" "}
          <span>reliable, quality web applications and web sites</span>.
        </p>
        {/* <p>
          Check out my{" "}
          <HighlightLink href="#projects">personal projects</HighlightLink>{" "}
          below, or <HighlightLink href="#contact">contact me</HighlightLink>{" "}
          for any opportunities!
        </p> */}
      </div>
    </div>
  );
}
export default ContainerWrapper(MotionWrapper(Hero), "about");
