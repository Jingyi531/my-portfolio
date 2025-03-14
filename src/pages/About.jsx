import React from "react";

const About = () => {
  return (
    <div className="container mt-5">

      <h1 className="text-center mb-4" id="main-content">About Me</h1>

      {/* Education Section */}
      <section className="mb-5">
        <h2>Education</h2>
        <div className="bg-light p-4 rounded">
          <h3>Dalhousie University</h3>
          <p>
            <strong>Bachelor of Computer Science</strong> (2022 - 2026)
          </p>
          <ul>
            <li>Coursework: Data Structures and Algorithms, Computational Theory, Network Computing</li>
          </ul>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section className="mb-5">
        <h2>Technical Skills</h2>
        <div className="bg-light p-4 rounded">
          <h3>Programming Languages</h3>
          <ul>
            <li>Java, C#, Python, SQL, React JS, JavaScript</li>
          </ul>
          <h3>Frameworks & Tools</h3>
          <ul>
            <li>Visual Studio, Git</li>
          </ul>
        </div>
      </section>

      {/* Career Goals Section */}
      <section className="mb-5">
        <h2>Career Goals</h2>
        <div className="bg-light p-4 rounded">
          <p>
            I am passionate about technology and software development, with a particular interest in
            full-stack development and quality assurance. My goal is to contribute to innovative
            projects that solve real-world problems while continuously improving my technical skills
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;