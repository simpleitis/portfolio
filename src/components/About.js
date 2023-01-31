import React from 'react';

const About = () => {
    return (
            <div
                name="about"
                id="about"
                className="w-full min-h-[80vh] bg-[#0a192f] text-gray-300 sm:pt-16 xl:pt-32 2xl:pt-32"
            >
                <div className="flex flex-col justify-center items-center w-full h-full sm:h-max ">
                    <div className="py-8 sm:py-16 bg-cyan-800 flex flex-col justify-center items-center px-4 sm:px-0 sm:w-4/6 md:pb-36 md:pt-20">
                        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4 ">
                            <div className="sm:text-right pb-8 pl-4 ">
                                <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
                                    About
                                </p>
                            </div>
                        </div>
                        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                            <div className="sm:text-right text-4xl font-bold">
                                <p>
                                    Hi. I'm Amar, nice to meet you. Please take
                                    a look around.
                                </p>
                            </div>
                            <div>
                                <p>
                                    {' '}
                                    A software developer with experience in
                                    building react and next.js apps. I am also
                                    into ethereum blockchain development using
                                    Hardhat. I am also well versed with Tailwind
                                    CSS and Material UI.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};
export default About;
