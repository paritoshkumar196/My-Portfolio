import Home from '../Pages/Home';
import About from '../Pages/About';
import Skill from '../Pages/Skill';
import Education from '../Pages/Education'
import Project1 from '../Pages/Project1';
import Contact from '../Pages/Contact';


const sections = [
  { name: "home", component: <Home /> },
  { name: "about", component: <About /> },
  { name: "education", component: <Education /> },
  { name: "skill", component: <Skill /> },
  { name: "project", component: <Project1 /> },
  { name: "contact", component: <Contact/> },
];



export default sections;

