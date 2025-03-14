import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="container mt-5">
   
      <h1 className="text-center mb-4" id="main-content">Welcome to My Portfolio</h1>

      <div className="row">
        
        <div className="col-md-8 mx-auto">
         
          
              <p className="lead">
                Hi, I'm Jingyi Yang, a passionate computer science student at Dalhousie University.
                I specialize in full-stack development and problem-solving.
              </p>
              <p>
                Explore my portfolio to learn more about my projects, skills, and experience.
              </p>
              

              <Link
                to="/about"
                className="btn btn-custom"
                aria-label="Learn more about me"
              >
                Learn More
              </Link>
            
      
        </div>
      </div>
    </div>
  );
};

export default Home;