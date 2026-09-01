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
                <h4>Founder &amp; Full-Stack Developer</h4>
                <h5>+one · plusoneco.in</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Founded and developed +one, owning the product from concept and
              architecture through implementation and continuous iteration. Built
              the frontend in TypeScript and React, backend services and API
              workflows in Node.js and Express, and designed the data structures
              behind it in MongoDB. Integrated LLM APIs to explore practical
              AI-powered capabilities, and handled product decisions, testing,
              deployment and debugging across every layer independently.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Founder &amp; Full-Stack Developer</h4>
                <h5>NEARconnect</h5>
              </div>
              <h3>Product</h3>
            </div>
            <p>
              Conceptualized and built NEARconnect, a platform connecting people
              with relevant professionals and businesses by profession and
              location. Designed the architecture, user flows and database
              structure, built responsive interfaces with React, JavaScript and
              Tailwind CSS, and shipped backend services on Node.js, Express and
              MongoDB supporting user profiles, professional discovery and
              location-based interactions.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Assistant</h4>
                <h5>Python · LLM APIs · Generative AI</h5>
              </div>
              <h3>Project</h3>
            </div>
            <p>
              Developed an AI assistant connecting application functionality to an
              LLM through API-based workflows—exploring conversational AI,
              automation, voice interaction, prompt engineering, and comparing
              models on response quality, latency and fit for each workflow.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor of Computer Application</h4>
                <h5>DDU University</h5>
              </div>
              <h3>BCA</h3>
            </div>
            <p>
              Currently pursuing a BCA, now in the 3rd semester, while building and
              shipping full-stack products alongside coursework.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
