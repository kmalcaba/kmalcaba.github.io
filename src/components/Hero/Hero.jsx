import "./Hero.scss";
import { ContainerWrapper, MotionWrapper } from "../../wrapper";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>👋 Hi, I'm Kirsten!</h1>
        <p>
          I am a front-end developer who likes to dabble with full-stack apps
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod
          officiis dolor commodi voluptatum odio voluptate, placeat, delectus
          nobis voluptatibus distinctio vitae assumenda molestias amet officia,
          in molestiae iste vel aperiam.
        </p>
      </div>
    </div>
  );
}
export default ContainerWrapper(MotionWrapper(Hero), "hero");
