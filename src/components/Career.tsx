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
                <h4>Plus One (+one)</h4>
                <h5>Founder &amp; Builder · plusoneco.in</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Designing and shipping a realtime chatting app for friends, group
              chats and interest-based communities—1:1 and group messaging over
              Socket.IO, live polls, voice notes, stories, disappearing messages
              and WebRTC calls, running on web, Android and iOS from one codebase.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Student</h4>
                <h5>Marwar Business School</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Currently studying at Marwar Business School while building web
              development skills—designing and shipping projects end to end, from
              responsive frontends to backend logic, on GitHub.
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
