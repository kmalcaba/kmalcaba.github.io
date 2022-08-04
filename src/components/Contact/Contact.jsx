import "./Contact.scss";
import Button from "../Button/Button";
import { ContainerWrapper, MotionWrapper } from "../../wrapper";

import { AiFillMail, AiFillLinkedin, AiFillGithub } from "react-icons/ai";

function Contact() {
  return (
    <div className="contact">
      <h2>
        Get in touch, drop me an{" "}
        <a className="contact-link" href="mailto:kmalcaba@live.com">
          email
        </a>
        ! 💌
      </h2>
      <div className="contact-cards">
        <a href="mailto:kmalcaba@live.com">
          <Button className="btn-primary" Icon={AiFillMail}>
            Email
          </Button>
        </a>
        <a
          href="https://www.linkedin.com/in/kmalcaba/"
          target="_blank"
          rel="noreferrer"
        >
          <Button className="btn-primary" Icon={AiFillLinkedin}>
            LinkedIn
          </Button>
        </a>
        <a href="https://github.com/kmalcaba" target="_blank" rel="noreferrer">
          <Button className="btn-primary" Icon={AiFillGithub}>
            Github
          </Button>
        </a>
      </div>
    </div>
  );
}
export default ContainerWrapper(MotionWrapper(Contact), "contact");
