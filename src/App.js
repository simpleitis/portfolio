import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Works from './components/Works';
import Credits from './Credits';
import { Fade } from 'react-awesome-reveal';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <div className="bg-[#0a192f]">
                            <Navbar />
                            <Fade
                                cascade
                                damping={0.1}
                                fraction={0.3}
                                triggerOnce
                            >
                                <Home />
                                <About />
                                <Skills />
                            </Fade>
                            <Fade
                                cascade
                                damping={0.1}
                                fraction={0.05}
                                triggerOnce
                            >
                                <Works />
                                <Contact />
                            </Fade>
                            <ToastContainer
                                autoClose={4000}
                                position="bottom-center"
                            />
                        </div>
                    }
                ></Route>
                <Route path="/credits" element={<Credits />}></Route>
            </Routes>
        </BrowserRouter>
    );
}
export default App;
