import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My journey <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack / Web Developer</h4>
                <h5>Building Projects</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Designing and developing web applications end to end—from responsive
              frontends to backend logic—and shipping them to GitHub.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>NEARconnect</h4>
                <h5>Web App · JavaScript</h5>
              </div>
              <h3>Project</h3>
            </div>
            <p>
              Built a web app to connect people nearby based on their profession,
              focusing on matching and a clean, usable interface.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Restaurant & Web Builds</h4>
                <h5>HTML · CSS</h5>
              </div>
              <h3>Projects</h3>
            </div>
            <p>
              Created multiple websites including Nate Bhai Biriyani Corner—practicing
              responsive layouts, styling, and content-driven page design.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Learning the Web</h4>
                <h5>HTML · CSS · JavaScript</h5>
              </div>
              <h3>Foundation</h3>
            </div>
            <p>
              Started with the fundamentals of the web—markup, styling, and
              scripting—through hands-on projects and experiments on GitHub.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
