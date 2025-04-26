import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I'm <span className="purple">Arjun Sharma</span>, a passionate Computer Science graduate from <span className="purple">VIT Vellore</span>, deeply enthusiastic about building scalable tech solutions that create real-world impact.
            <br />
            <br />
            I specialize in developing full-stack web applications using the <span className="purple">MERN stack</span> and crafting AI/ML models for intelligent automation using <span className="purple">Python, TensorFlow, and OpenCV</span>.
            <br />
            <br />
            Alongside backend systems and APIs, I engineer immersive 3D user experiences with <span className="purple">WebGL</span> and real-time, responsive apps using <span className="purple">Firebase</span>. I'm also skilled at deploying cloud-native applications with <span className="purple">AWS, GCP</span>, and serverless architectures.
            <br />
            <br />
            My work at <span className="purple">Arcesium</span> as a Software Development Intern gave me hands-on experience improving system reliability, working with AWS cloud solutions, and applying modular software design principles.
          </p>
          <p style={{ textAlign: "justify" }}>
            <span className="purple">Key strengths include:</span>
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Full-stack Development (MERN)
            </li>
            <li className="about-activity">
              <ImPointRight /> Machine Learning & AI Systems
            </li>
            <li className="about-activity">
              <ImPointRight /> Cloud Services Deployment (AWS, GCP, Firebase)
            </li>
            <li className="about-activity">
              <ImPointRight /> API Development and Integration
            </li>
            <li className="about-activity">
              <ImPointRight /> Responsive UI/UX Engineering
            </li>
            <li className="about-activity">
              <ImPointRight /> Problem-Solving with DSA
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Arjun</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
