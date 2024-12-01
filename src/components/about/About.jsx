import React from "react";
import "./about.css";
import ME from "../../assets/me-about.png";
import { FaAward } from "react-icons/fa";
import { FaIndustry } from "react-icons/fa";
import { BsFolderFill } from "react-icons/bs";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About ME" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className="about__card">
              <BsFolderFill className="about__icon" />
              <h5>Projects</h5>
              <div className="projectsContent">
                <small>Syndication project(CG)</small>
                <small>CDH Home Solutions(CG)</small>
                <small>Wealth & Personal Banking(CG)</small>
                <small>IAS Counselor(Byju's)</small>
              </div>
            </article>
            <article className="about__card">
              <FaIndustry className="about__icon" />
              <h5>Companies</h5>
              <div className="companiesContent">
                <small>Capgemini</small>
                <small>Byju's</small>
              </div>
            </article>
          </div>
          <p>
            A proactive Front-End Developer with over 3 years of experience in
            designing, developing, and optimizing high-quality user interfaces.
            Proficient in React.js, React Native, JavaScript, TypeScript, and
            Tailwind CSS, with a solid foundation in modern front-end
            technologies and agile methodologies. Expertise in creating
            responsive, scalable, and performance-optimized web and mobile
            applications. Adept at implementing authentication systems, working
            with JWT tokens, and utilizing Chrome Developer Tools for efficient
            debugging. Skilled in writing clean, efficient, and maintainable
            code, and providing comprehensive code reviews and documentation.
            Experienced in working collaboratively with cross-functional teams,
            managing tasks with urgency, and driving continuous improvement.
            Passionate about delivering intuitive user experiences, solving
            complex technical problems, and staying ahead of industry trends.
            Eager to contribute to impactful projects, enhance problem-solving
            skills, and continue growing as a full-stack developer while
            leveraging my front-end expertise.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
