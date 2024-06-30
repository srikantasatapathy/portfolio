import Navigation from "../../components/Navigation";
import Greetings from "../../containers/Greetings";
import Skills from "../../containers/Skills";
import GithubProfileCard from "../../components/GithubProfileCard";
import Proficiency from "../../containers/Proficiency";
import Education from "../../containers/Education";
import Experience from "../../containers/Experience";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/argon-design-system-react.css";
import "../../styles/styles.css";
import "../../styles/vendor/font-awesome/css/font-awesome.min.css";
import "../../styles/vendor/nucleo/css/nucleo.css";
import Projects from "../../containers/Projects";
import ImageGallery from "../../containers/ImageGallery";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Greetings />
      <Skills />
      <Proficiency />
      <Education />
      <Experience />
      <Projects />
      <ImageGallery/>
      <GithubProfileCard/>
    </div>
  );
};

export default Home;
