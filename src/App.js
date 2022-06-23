import AboutMe from "./components/aboutMe";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Banner from "./components/introBanner";
import NavBar from "./components/navbar";
import Projects from "./components/projects/projects";
import Skills from "./components/skills";

import styles from './app.module.scss';

function App() {
  return (
    <div className={styles.container}>
      <NavBar about='#about ' projects='#project ' contact='#contact ' />
      <a name='top'><Banner /></a>
      <a name='about' ><AboutMe /></a>
      <Skills />
      <a name='project'><Projects /></a>
      <a name='contact'><Contact /></a>
      <a href='#top'><span className={`material-icons ${styles.up}`}>&#xe5d8;</span>
      </a><Footer />
    </div>
  );
}

export default App;
