import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import cash from "../../Assets/cash.png"
import job from "../../Assets/job.png"
import coin from "../../Assets/coin.png"
import portfolio from "../../Assets/portfolio.png"
import ats from "../../Assets/ats.png"

import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={cash}
              isBlog={false}
              title="Cash-Flow"
              description="Developed a Cash-flow Management Web App using MongoDB, ExpressJs, ReactJs, Nodejs, and ChartJs. It includes secure user authentication, CRUD operations for income and expense records, and dynamic data visualization, all powered by a robust MongoDB backend."
              ghLink="https://github.com/Sushrutkun/Cash-Flow"
              demoLink="https://cash-floww.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={job}
              isBlog={false}
              title="JOB-Board"
              description="Built a dynamic job listings website with MongoDB, ExpressJs, ReactJs, Nodejs, and Material UI. It has backend integration, user authentication, and job management functions, including save/bookmark and job application tracking. Find the live version on GitHub."
              ghLink="https://github.com/Sushrutkun/Job_Board"
              demoLink="https://job-brd.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={coin}
              isBlog={false}
              title="Coin Stats"
              description="developed a React.js website that displays real-time data of over 200 cryptocurrencies using an API. It incorporates Material UI for an attractive and responsive CoinPage, an interactive UI Carousel for easy navigation, Chart.js for detailed data representation with weekly, monthly, and yearly charts, and a search functionality for viewing specific coin details on a dedicated page"
              ghLink="https://github.com/Sushrutkun/CoinStats"
              demoLink="https://coin-stats.vercel.app/"              
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ats}
              isBlog={false}
              title="Ats resume scanner"
              description="As a software engineering student, I've built a Python web app with Firebase authentication. Users can log in, upload their resume, and provide a job description and custom tags. Using Flask and NLP libraries, the app calculates a resume score based on JD alignment and tag relevance, displaying it with a gauge visualization. This helps users optimize their resumes for specific applications."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio"
              description="My portfolio website is a one-stop platform displaying my projects, GitHub contributions, tech stack, resume, blog, and contact information. It encapsulates my journey as a software engineer, making it a valuable resource for potential employers and collaborators.This website serves as a dynamic tool for networking, job opportunities, and collaboration, reflecting my passion and proficiency as a software engineer."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
