import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
<<<<<<< HEAD
  AiOutlineTwitter,
  AiFillInstagram,
=======
  AiFillMail,
>>>>>>> 7382ec2d (Clean commit with updated code)
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Arjun Sharma</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} AS</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/arj-sh4rm4"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://linkedin.com/in/arj-sharma"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="mailto:arjun.sh4rm4@gmail.com"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
<<<<<<< HEAD
                <AiFillGithub />
=======
                <AiFillMail />
>>>>>>> 7382ec2d (Clean commit with updated code)
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
<<<<<<< HEAD
=======
//Footer Page update
>>>>>>> 7382ec2d (Clean commit with updated code)
