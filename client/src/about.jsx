import ux from "../src/assets/ux.png";
import web from "../src/assets/web.png";
import app from "../src/assets/app.png";
import "../src/index.css";
import "../src/about.css";

export default function About() {
  return (
    <section id="skill" className="about-section">
      <div className="container">
        <h1 className="section-title">What I Do</h1>
        <p className="section-desc">
        As an energized and highly experienced web designer, I have numerous experience creating beautifull website and easy to use websites. I have a solid background in design concepts and an excellent eye for detail. I am skilled with design programs like Adobe Illustrator and Photoshop in addition to HTML, CSS, and JavaScript.
        </p>

        <div className="skills-grid">
          <div className="skill-card">
            <div className="skill-img-circle">
              <img src={ux} alt="UI/UX Design" className="skill-img" />
            </div>
            <div className="skill-info">
              <h2>UI/UX Design</h2>
              <p>
              As a dedicated and experienced web designer, I specialize in UI/UX design, creating visually compelling and intuitive interfaces that enhance user engagement.
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
              As a skilled Web Designer, I create visually beautiful and useful websites that improve user experiences through the use of fluid designs made possible by HTML, CSS, JavaScript, and sophisticated design tools.
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
              As a skilled app designer, my mission is to create user-friendly applications. I do this by applying my in-depth knowledge of UI/UX concepts and state-of-the-art technology to ensure that functionality and aesthetics coincide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
