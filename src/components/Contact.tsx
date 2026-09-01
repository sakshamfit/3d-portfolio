import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a
                href="mailto:tonybanner885@gmail.com"
                data-cursor="disable"
              >
                tonybanner885@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href="tel:+918604683669" data-cursor="disable">
                +91 86046 83669
              </a>
            </p>
            <h4>Education</h4>
            <p>BCA, DDU University</p>
            <h4>Focus</h4>
            <p>Full-Stack Development &amp; Applied AI</p>
            <p>TypeScript · React · Node.js · Express · MongoDB · LLM APIs</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://plusoneco.in"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              +one — plusoneco.in <MdArrowOutward />
            </a>
            <a
              href="https://github.com/sakshamfit"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://sakshamfit.netlify.app"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Portfolio <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Anshuman Pandey</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
