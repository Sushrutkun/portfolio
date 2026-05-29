import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Sushrut Athawale </span>
            from <span className="purple"> Nagpur, India.</span>
            <br />
            <span className="purple">Reliability-focused Backend Engineer</span> with <span className="purple">2+ years</span> of experience designing fault-tolerant <span className="purple">distributed systems</span> handling <span className="purple">76M+ daily communications</span> with <span className="purple">99.9% uptime SLA</span>.
            <br />
            I architected multi-tenant <span className="purple">CRM platforms</span> processing <span className="purple">400K RPM</span>, reducing operational costs by <span className="purple">INR 40-60L/month</span> through optimized event sourcing and state management at <span className="purple">Groww</span>.
            <br />
            Expert in building resilient infrastructure with <span className="purple">Apache Kafka</span>, <span className="purple">RocksDB</span>, circuit breakers, and failover strategies. Strong track record in designing <span className="purple">microservices architecture</span>, managing incident response, and documenting architecture decisions.
            <br />
            <br />
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
