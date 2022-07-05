import AboutMe from "./components/aboutme/aboutMe";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import Banner from "./components/banner/introBanner";
import NavBar from "./components/navbar/navbar";
import Projects from "./components/projects/projects";
import Skills from "./components/skills/skills";

import styles from "./app.module.scss";

function App() {
  return (
    <div className={styles.container}>
      <NavBar about="#about " projects="#project " contact="#contact " />
      <a name="top">
        <Banner />
      </a>
      <a name="about">
        <AboutMe />
      </a>
      <a name="project">
        <Projects />
      </a>
      <Skills />
      <a name="contact">
        <Contact />
      </a>
      <a href="#top">
        <span className={`material-icons ${styles.up}`}>&#xe5d8;</span>
      </a>
      <Footer />
    </div>
  );
}

export default App;
