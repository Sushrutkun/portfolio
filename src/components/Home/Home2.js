import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am proficient in backend technologies like
              <i>
                <b className="purple"> Java, GoLang, Python, and Scala. </b>
              </i>
              <br />
              <br />
              My expertise lies in designing and building &nbsp;
              <i>
                <b className="purple">Scalable Distributed Systems</b> and
                also in areas related to{" "}
                <b className="purple">
                  System Design & Optimization.
                </b>
              </i>
              <br />
              I have solved 800+ problems on LeetCode and other platforms, earned 5-star badges in DSA, C++, and C
              <br />
              <br />
              At Groww, I've designed platforms processing 76M+ daily communications,
              optimized services at <b className="purple">400K RPM</b>, and built <b className="purple">real-time streaming pipelines</b>
              with &nbsp;
              <i>
                <b className="purple">
                  Apache Kafka, Spark, Redis, and Kubernetes
                </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        
      </Container>
    </Container>
  );
}
export default Home2;
