import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiDocker,
  SiKubernetes,
  SiArgocd,
  SiApacheairflow,
  SiGit,
  SiGithub,
  SiLeetcode,
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
        <SiArgocd />
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
