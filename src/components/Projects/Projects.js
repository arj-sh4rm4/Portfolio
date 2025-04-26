import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Virtual Car Showroom"
              description="Immersive 3D car showroom web app using WebGL with custom test drive simulation and live deployment. Supports real-time interaction for 100+ users via scalable MERN backend."
              ghLink="https://github.com/arj-sh4rm4/Virtual-Car-Showroom"
              demoLink="https://vcs.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="DermDetectAI"
              description="CNN-powered diagnostic tool for skin lesion and cancer detection with 96% accuracy on the ISIC dataset. Integrated chatbot and Google Maps API to suggest nearby dermatologists."
              ghLink="https://github.com/arj-sh4rm4/DermDetectAI"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="ChromaCrafters"
              description="Personalized color palette platform with facial landmark detection to suggest wardrobe styles. Integrated Forever21 API for real-time fashion suggestions."
              ghLink="https://github.com/arj-sh4rm4/ChromaCrafters"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="SerenityAI"
              description="Mental wellness platform offering real-time therapy chat, voice input, journaling, and emergency contact features. Integrated with Google PaLM API for empathetic NLP responses."
              ghLink="https://github.com/arj-sh4rm4/AiTherapist"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
