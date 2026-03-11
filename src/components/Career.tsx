import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Cyber Security Analyst</h4>
                <h5>Cialfor Research Labs Pvt. Ltd., Pune (Hybrid)</h5>
              </div>
              <h3>2024 – Present</h3>
            </div>
            <p>
              Performed VAPT on web applications and networks, delivered remediation strategies, handled incident response and threat analysis, and supported digital forensic investigations to trace attacks.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Cyber Security Analyst Intern</h4>
                <h5>Supraja Technologies, Hyderabad (On-site)</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Worked on penetration testing and ethical hacking methodologies, assisted in security assessments, vulnerability scanning, and reporting while learning practical offensive security approaches.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Development Trainee</h4>
                <h5>Brainovision Solutions India Pvt. Ltd. (Remote)</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Built responsive web applications, learned frontend and backend fundamentals, and implemented modern development practices for scalable apps.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
