import AboutMe from "./components/aboutMe";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Banner from "./components/introBanner";
import NavBar from "./components/navbar";
import Projects from "./components/projects/projects";
import Skills from "./components/skills";

function App() {
  return (
    <div>
      <NavBar />
      <Banner />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
