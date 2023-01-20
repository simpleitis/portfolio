import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Works from './components/Works';
import { Fade } from 'react-awesome-reveal';

function App() {
    return (
        <div className="bg-[#0a192f]">
            <Navbar />
            <Fade cascade damping={0.1} fraction={0.3} triggerOnce>
                <Home />

                <About />

                <Skills />

                <Works />

                <Contact />
            </Fade>
            <ToastContainer autoClose={4000} position="bottom-center" />
        </div>
    );
}
export default App;
