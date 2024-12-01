import React from "react";
import "./skills.css";
import { BsPatchCheckFill } from "react-icons/bs";
const Skills = () => {
  return (
    <section id="skills">
      <h5>What Skills I Have</h5>
      <h2>My Skills</h2>

      <div className="container skills__container">
        <div className="skills__fullstack">
          <h3>Front-End Development/ Mobile App Developer</h3>
          <div className="skills__content">
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icons" />
              <div>
                <h4>React.Js</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icons" />
              <div>
                <h4>React-Native</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icons" />
              <div>
                <h4>Redux</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icons" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icons" />
              <div>
                <h4>NodeJS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icons" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icons" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icons" />
              <div>
                <h4>Bootstrap | MaterialUI</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icons" />
              <div>
                <h4>Tailwind CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icons" />
              <div>
                <h4>Typescript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        <div className="skills__others">
          <h3>Others Tools </h3>
          <div className="skills__content">
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icons" />
              <div>
                <h4>VSCode</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icons" />
              <div>
                <h4>Eclipse</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icons" />
              <div>
                <h4>Github</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icons" />
              <div>
                <h4>Postman</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icons" />
              <div>
                <h4>NICE CXone</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icons" />
              <div>
                <h4>Genesys</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icons" />
              <div>
                <h4>Kore.AI</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
