import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import ux from "../src/assets/ux.png";
import web from "../src/assets/web.png";
import app from "../src/assets/app.png";
import "../src/index.css";
import "../src/about.css";

export default function About() {
  return (
    <section id="skills" className="about-section">
      <div className="container">
        <h1 className="section-title">What I Do</h1>
        <p className="section-desc">
          As a passionate and seasoned web designer, I have extensive experience in creating visually appealing and user-friendly websites. My solid foundation in design principles, coupled with an acute attention to detail, allows me to produce high-quality work. I am proficient in design tools such as Adobe Illustrator and Photoshop, as well as web technologies including HTML, CSS, and JavaScript.
        </p>

        <div className="skills-grid">
          <div className="skill-card">
            <div className="skill-img-circle">
              <img src={ux} alt="UI/UX Design" className="skill-img" />
            </div>
            <div className="skill-info">
              <h2>UI/UX Design</h2>
              <p>
                I specialize in UI/UX design, focusing on creating visually engaging and intuitive interfaces that enhance user engagement and satisfaction.
              </p>
            </div>
          </div>

          <div className="skill-card">
            <div className="skill-img-circle">
              <img src={web} alt="Web Design" className="skill-img" />
            </div>
            <div className="skill-info">
              <h2>Web Design</h2>
              <p>
                As a skilled web designer, I craft aesthetically pleasing and functional websites that elevate user experiences through fluid designs utilizing HTML, CSS, JavaScript, and advanced design tools.
              </p>
            </div>
          </div>

          <div className="skill-card">
            <div className="skill-img-circle">
              <img src={app} alt="App Design" className="skill-img" />
            </div>
            <div className="skill-info">
              <h2>App Design</h2>
              <p>
                My goal as an app designer is to develop user-friendly applications by leveraging my comprehensive understanding of UI/UX principles and cutting-edge technology to ensure seamless functionality and aesthetic appeal.
              </p>
            </div>
          </div>
        </div>

        {/* Link to Education Page */}
        <div className="education-link" style={{ marginTop: '20px', textAlign: 'center' }}>
          <Link to="/education" style={{ textDecoration: 'none', color: '#1565c0', fontWeight: 'bold' }}>
            View My Education
          </Link>
        </div>
      </div>
    </section>
  );
}
