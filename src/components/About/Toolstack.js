import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiDocker,
  SiKubernetes,
  SiApacheairflow,
  SiGit,
  SiGithub,
  SiLeetcode,
  SiPrometheus,
  SiGrafana,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons" >
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons" >
        <SiDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons" >
        <SiKubernetes />
      </Col>
      <Col xs={4} md={2} className="tech-icons" >
        <SiPrometheus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApacheairflow />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLeetcode />
      </Col>
    </Row>
  );
}

export default Toolstack;
