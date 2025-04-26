import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import awsLogo from "../../Assets/AWSlogo.png";
import ibmLogo from "../../Assets/IBMlogo.png";
import hackerrankLogo from "../../Assets/HackerRanklogo.png";
import googleLogo from "../../Assets/Googlelogo.png";
import freecodecampLogo from "../../Assets/FreeCodeCamplogo.png";

function Certifications() {
  const certifications = [
    {
      title: "AWS Cloud Practitioner Essentials",
      description: "Fundamental cloud computing concepts, AWS core services, security, and architecture best practices.",
      date: "Dec 2024",
      link: "https://www.aws.training",
      logo: awsLogo
    },
    {
      title: "Accelerating Deep Learning with GPUs - IBM Cognitive Class",
      description: "Techniques to optimize deep learning models for GPU acceleration, focusing on training speed and performance.",
      date: "Jul 2024",
      link: "https://courses.cognitiveclass.ai/certificates/8db31a0c0a1c4d53b1e9e88bc852faf2",
      logo: ibmLogo
    },
    {
      title: "Frontend Developer (React) - HackerRank",
      description: "Certified React developer with strong proficiency in building responsive user interfaces using ReactJS best practices.",
      date: "Aug 2024",
      link: "https://www.hackerrank.com/certificates/8fc8d2ff9acd",
      logo: hackerrankLogo
    },
    {
      title: "Google Analytics Certification - Skillshop",
      description: "Certified in digital analytics, tracking KPIs, and leveraging Google Analytics for data-driven decision-making.",
      date: "Jan 2025",
      link: "https://skillshop.credential.net/a250c0ec-4ecc-4867-849b-5bc8e232c1f6#acc.NklIzLuB",
      logo: googleLogo
    },
    {
      title: "JavaScript Algorithms and Data Structures - FreeCodeCamp",
      description: "Comprehensive training in core JavaScript concepts, algorithms, data structures, functional programming, and object-oriented programming.",
      date: "Apr 2025",
      link: "https://www.freecodecamp.org/certification/arjun_sharma/javascript-algorithms-and-data-structures",
      logo: freecodecampLogo
    },
    {
      title: "SQL (Advanced) - HackerRank",
      description: "Certified advanced SQL practitioner with expertise in complex queries, joins, aggregations, and database optimization techniques.",
      date: "Apr 2025",
      link: "https://www.hackerrank.com/certificates/7085d05a357f",
      logo: hackerrankLogo
    }
  ];

  return (
    <Container fluid className="certifications-section">
      <Row className="justify-content-center">
        {certifications.map((cert, index) => (
          <Col key={index} xs={12} md={6} className="mb-4">
            <div className="cert-card">
              <div className="cert-card-view">
                <div className="cert-card-header">
                  <img src={cert.logo} alt={`${cert.title} logo`} className="cert-logo" />
                  <h3 className="cert-title">{cert.title}</h3>
                </div>
                <p className="cert-description">{cert.description}</p>
                <p className="cert-date">Completed: {cert.date}</p>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-link"
                >
                  View Certificate
                </a>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Certifications; 