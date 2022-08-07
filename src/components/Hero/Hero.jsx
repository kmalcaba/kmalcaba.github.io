import "./Hero.scss";
import { ContainerWrapper, MotionWrapper } from "../../wrapper";

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
        <p>
          Check out my <a href="#projects">personal projects</a> below, or{" "}
          <a href="#contact">contact me</a> for any opportunities!
        </p>
      </div>
    </div>
  );
}
export default ContainerWrapper(MotionWrapper(Hero), "about");
