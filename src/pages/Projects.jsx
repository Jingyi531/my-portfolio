import React from "react";

const Projects = () => {
  return (
    <div className="container mt-5">
  <h1 className="text-center mb-4">My Projects</h1>


  <div className="row" id="main-content">
    {/* Card 1: Trello Workspace Clone */}
    <div className="col-md-6 mb-4">
      <div className="card custom-card h-100">
        <div className="card-body">
          <h2>Trello Workspace Clone</h2>
          <p>
            A full-stack project to manage workspaces and tasks with
            authorization.
          </p>
          <ul>
            <li>Built with React.js, Spring Boot, and MySQL.</li>
            <li>Integrated RESTful API for data handling.</li>
            <li>Conducted unit and integration testing.</li>
          </ul>
          <a
            href="https://github.com/Jingyi531/Trello1"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-custom"
            aria-label="View Trello Workspace Clone on GitHub"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </div>

    {/* Card 2: Weather App */}
    <div className="col-md-6 mb-4">
      <div className="card custom-card h-100">
        <div className="card-body">
          <h2>Weather App</h2>
          <p>
            A weather application that provides real-time weather information
            for any city.
          </p>
          <ul>
            <li>Built with React and OpenWeatherMap API.</li>
            <li>Displays current weather and 5-day forecast.</li>
            <li>Responsive design for mobile and desktop.</li>
          </ul>
          <a
            href="https://github.com/Jingyi531/weather-app"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-custom"
            aria-label="View Weather App on GitHub"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
  );
};

export default Projects;