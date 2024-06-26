import Navigation from "../../components/Navigation";
import Greetings from "../../containers/Greetings";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/argon-design-system-react.css";
import "../../styles/styles.css";
import "../../styles/vendor/font-awesome/css/font-awesome.min.css";
import "../../styles/vendor/nucleo/css/nucleo.css";
import Skills from "../../containers/Skills";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Greetings />
      <Skills />
    </div>
  );
};

export default Home;
