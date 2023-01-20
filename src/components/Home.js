import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import me from '../assets/me.png';
import { Link } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
    return (
        <div
            name="home"
            className="min-h-screen w-full bg-[#0a192f] pt-24 sm:pt-28 md:pt-44 xl:pt-40 lg:px-10"
        >
            <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row ">
                <div className="flex flex-col justify-center h-full w-full xl:px-10">
                    <h2 className="text-3xl sm:text-3xl font-bold text-white">
                        I am a
                    </h2>
                    <div className="w-full text-6xl sm:text-7xl md:text-6xl xl:text-8xl font-bold text-white ">
                        <TypeAnimation
                            sequence={['React', 1500, 'Blockchain', 1500]}
                            wrapper="div"
                            cursor={true}
                            repeat={Infinity}
                        />
                    </div>
                    <div className="text-3xl sm:text-3xl font-bold text-white">
                        developer
                    </div>
                    <div className="py-10">
                        <Link
                            to="about"
                            smooth
                            duration={500}
                            className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
                        >
                            Know more
                            <span className="group-hover:translate-x-1.5 duration-300">
                                <HiArrowNarrowRight
                                    size={25}
                                    className="ml-3"
                                />
                            </span>
                        </Link>
                    </div>
                </div>
                <div>
                    <img
                        src={me}
                        alt="my profile"
                        className="rounded-2xl mx-auto w-52 md:w-[30rem] lg:w-2/3 2xl:w-full"
                    />
                </div>
            </div>
        </div>
    );
};
export default Home;
