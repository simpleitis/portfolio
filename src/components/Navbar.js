import { useState } from 'react';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { toast } from 'react-toastify';

function Navbar() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
        <div className="flex justify-between sm:px-3 py-1.5 fixed z-20 w-full shadow-lg bg-[#0a192f]">
            <Link to="home">
                <div className="self-center font-bold text-gray-800 text-2xl sm:text-3xl py-3 flex">
                    <p className="self-center text-white pl-2">Amar Krishna</p>
                </div>
            </Link>
            <div className="flex items-center justify-between pr-3 lg:pr-0">
                <nav>
                    <section className="MOBILE-MENU flex lg:hidden bg-[#0a192f]">
                        <div
                            className="HAMBURGER-ICON space-y-2"
                            onClick={() => setIsNavOpen((prev) => !prev)}
                        >
                            <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
                            <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
                            <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
                        </div>

                        <div
                            className={
                                isNavOpen ? 'showMenuNav' : 'hideMenuNav'
                            }
                        >
                            {' '}
                            <div
                                className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
                                onClick={() => setIsNavOpen(false)}
                            >
                                <svg
                                    className="h-8 w-8 text-gray-600"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                            </div>
                            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px] font-medium text-white">
                                <li className="border-b border-gray-400 my-8">
                                    <Link
                                        onClick={() => setIsNavOpen(false)}
                                        to="home"
                                        smooth={true}
                                        duration={500}
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li className="border-b border-gray-400 my-8">
                                    <Link
                                        onClick={() => setIsNavOpen(false)}
                                        to="about"
                                        smooth={true}
                                        duration={500}
                                    >
                                        About
                                    </Link>
                                </li>
                                <li className="border-b border-gray-400 my-8 ">
                                    <Link
                                        onClick={() => setIsNavOpen(false)}
                                        to="skills"
                                        smooth={true}
                                        duration={500}
                                    >
                                        Skills
                                    </Link>
                                </li>
                                <li className="border-b border-gray-400 my-8">
                                    <Link
                                        onClick={() => setIsNavOpen(false)}
                                        to="work"
                                        smooth={true}
                                        duration={500}
                                    >
                                        Work
                                    </Link>
                                </li>
                                <li className="border-b border-gray-400 my-8">
                                    <Link
                                        onClick={() => setIsNavOpen(false)}
                                        to="contact"
                                        smooth={true}
                                        duration={500}
                                    >
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </section>

                    <ul className="DESKTOP-MENU hidden space-x-8 lg:flex items-center font-medium text-white">
                        <li>
                            <Link to="home" smooth={true} duration={500}>
                                <p className="group transition duration-300">
                                    Home
                                    <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-cyan-500"></span>
                                </p>
                            </Link>
                        </li>
                        <li>
                            <Link to="about" smooth={true} duration={500}>
                                <p className="group transition duration-300">
                                    About
                                    <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-cyan-500"></span>
                                </p>
                            </Link>
                        </li>
                        <li>
                            <Link to="skills" smooth={true} duration={500}>
                                <p className="group transition duration-300">
                                    Skills
                                    <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-cyan-500"></span>
                                </p>
                            </Link>
                        </li>
                        <li>
                            <Link to="work" smooth={true} duration={500}>
                                <p className="group transition duration-300">
                                    Work
                                    <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-cyan-500"></span>
                                </p>
                            </Link>
                        </li>
                        <li>
                            <Link to="contact" smooth={true} duration={500}>
                                <p className="group transition duration-300">
                                    Contact
                                    <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-cyan-500"></span>
                                </p>
                            </Link>
                        </li>
                    </ul>
                </nav>
                <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: #0a192f;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
            </div>
            <div className="hidden xl:flex fixed flex-col top-[35%] left-0">
                <ul>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
                        <a
                            className="flex justify-between items-center w-full text-gray-300"
                            href="http://linkedin.com/in/amar-krishna"
                        >
                            Linkedin <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
                        <a
                            className="flex justify-between items-center w-full text-gray-300"
                            href="https://github.com/simpleitis "
                        >
                            Github <FaGithub size={30} />
                        </a>
                    </li>
                    <li
                        className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]"
                        onClick={() => {
                            navigator.clipboard.writeText(
                                'amarkrishna25@gmail.com'
                            );
                            toast.success('Email ID copied!');
                        }}
                    >
                        <p className="flex justify-between items-center w-full text-gray-300">
                            Copy email <HiOutlineMail size={30} />
                        </p>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
                        <a
                            className="flex justify-between items-center w-full text-gray-300"
                            href="https://drive.google.com/file/d/1gJ5HRl2H5fpwFxIGJSvuUeV51rSsxoTI/view?usp=share_link"
                        >
                            Resume <BsFillPersonLinesFill size={30} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
