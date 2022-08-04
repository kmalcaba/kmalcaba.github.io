import "./Contact.scss";
import { ContainerWrapper, MotionWrapper } from "../../wrapper";

function Contact() {
  return (
    <div className="contact">
      <h2>
        Get in touch, drop me an <a href="mailto:kmalcaba@live.com">email</a>!
      </h2>
      <div className="contact-cards">
        <div className="contact-card"></div>
      </div>
    </div>
  );
}
export default ContainerWrapper(MotionWrapper(Contact), "contact");
