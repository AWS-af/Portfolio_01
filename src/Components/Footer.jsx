import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer_container">
        <div className="footer_info">
          <h2 className="footer_info_header">Contact Me!</h2>
          <p>
            If you want to talk over a cup of coffee, or have a design in your
            mind then find me on my social media or just text me from
            here.&#128522;{" "}
          </p>
          <div className="footer_info_social">
            <span className="footer_social_git">
              <a
                href="https://github.com/AWS-af"
                className="footer_social_git_anchor"
              >
                <FaGithub />
              </a>
            </span>
            <span className="footer_social_linked">
              <a
                href="https://linkedin.com/in/ab-siddiqui-b90392270"
                className="footer_social_linked_anchor"
              >
                <FaLinkedinIn />
              </a>
            </span>
          </div>
        </div>
        <div className="footer_form_container">
          <form
            action="https://formsubmit.co/absiddiqui110@gmail.com"
            className="footer_form"
            method="post"
          >
            <input
              type="text"
              name="message"
              placeholder="Your Message"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <input
              type="hidden"
              name="_subject"
              value="New submission on Portfolio!"
            ></input>
            <button type="submit" className="button_submit">
                Send
                <span className="button_hover" />
            </button>
          </form>
        </div>
      </div>
      <div className="footer_end">
        <div className="footer_end_info">
          <p>Designed and Developed by Abdul Wali Siddiqui</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
