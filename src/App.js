import './App.css';
import Navbar from './components/Navbar';
import Header from './components/header/Header';
import Intro from './components/Intro/Intro';
import Resume from './components/resume/Resume';
import Footer from './components/Footer';
import Projects from './components/projectList/Projects';

function App() {
  return (
    <>
      <div className="big-header relative lg:mb-52">
        <Navbar />
        <Header />
      </div>
      <Intro />
      <Resume />
      <Projects />
      <Footer />
    </>

  );
}

export default App;
