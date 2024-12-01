import React from "react";
import "./experience.css";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What I Have Done</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div>
          <article className="experience">
            <div className="experience__head">
              <h3>Capgemini Technology Services India Limited </h3>
              <h5 className="text-light">Software Engineer</h5>
            </div>
            <ul className="experience__list">
              <li>
                <p>
                  Collaborating on the Bio Clinical Syndication project, using
                  React.js to address dark mode theme bugs and enhance user
                  experience.Assisting in the development of consent acquisition
                  features for subjects, ensuring regulatory compliance and
                  maintaining workflow integrity across different modalities.
                </p>
              </li>
              <li>
                <p>
                  Contributed to the UI development for a React Native mobile
                  app at CDH Home Solutions, collaborating with a team to craft
                  seamless customer lifecycle experiences, including secure
                  authentication and intuitive user interfaces. Leveraged
                  Material UI and Google Maps API integration to enhance user
                  engagement and satisfaction, ensuring efficient tracking of
                  user activity and delivering tailored solutions for improved
                  user experiences.
                </p>
              </li>
              <li>
                <p>
                  Worked on the development of theWealth and Personal Banking
                  project, leveraging React.js, HTML5, CSS3, and JavaScript to
                  build responsive and scalable user interfaces, while ensuring
                  seamless state management with Redux for efficient data flow.
                  Collaborated closely with UX/UI designers to translate design
                  mock-ups into functional UI components, ensuring cross-browser
                  compatibility and adherence to accessibility standards, while
                  implementing automated testing using Jest and Enzyme to
                  maintain code quality and enhance user experience. Managed
                  version control using Git and GitHub for seamless
                  collaboration and code versioning.
                </p>
              </li>
            </ul>
          </article>
        </div>
        <div>
          <article className="experience">
            <div className="experience__head">
              <h3>Byju's Think & Learn</h3>
              <h5 className="text-light">Business Development Trainee</h5>
            </div>

            <ul className="experience__list">
              <li>
                <p>
                  Provided personalized guidance to students as an IAS
                  Counsellor, driving educational pursuits while supporting
                  business development efforts and promoting educational
                  products. Successfully exceeded student enrollment and
                  engagement goals.
                </p>
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Experience;
