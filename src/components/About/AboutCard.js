import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Sushrut Athawale </span>
            from <span className="purple"> Nagpur, India.</span>
            <br /> I am a Backend Engineer with 2+ years of experience building scalable distributed systems at <span className="purple">Groww</span>.
            <br />
            I specialize in designing high-performance platforms, optimizing services at 400K+ RPM, and delivering solutions that process 76M+ daily communications.
            <br />
            <br />
            {/* Apart from coding, some other activities that I love to do! */}
          </p>
          {/* <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul> */}

          <p style={{ color: "rgb(155 126 172)" }}>
            "Work towards creating meaningful innovations!"{" "}
          </p>
          <footer className="blockquote-footer">Sushrut</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
