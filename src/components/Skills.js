import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const Skills = () => {
    const technologies = [
        'ReactJS',
        'NextJS',
        'Redux',
        'TailWind',
        'MaterialUI',
        'Ethereum',
        'Solidity',
        'Hardhat',
        'Chainlink',
        'NodeJS',
        'CSS',
        'MongoDB',
        'Python',
    ];
    const items = technologies.map((technology) => {
        return (
            <div className="flex flex-col items-center">
                <div>
                    <img
                        className="mb-10"
                        src={`${technology}.png`}
                        alt="react image"
                        height="80"
                    />{' '}
                </div>
                <div>
                    <p className="font-semibold text-xl">{technology}</p>
                </div>
            </div>
        );
    });

    const responsive = {
        0: {
            item: 2,
        },
        500: {
            items: 2,
        },
        700: {
            items: 3,
        },
        1000: {
            items: 4,
        },
        1280: {
            items: 4,
        },
        1536: {
            items: 5,
        },
    };

    return (
        <div
            name="skills"
            className="w-full min-h-[88vh] text-gray-300 pt-20 sm:pt-20 2xl:pt-32"
        >
            {/* Container */}
            <div className="max-w-[1000px] 2xl:max-w-screen-xl  mx-auto p-4 flex flex-col justify-start w-full h-full">
                <div className=" w-full flex justify-center items-center flex-col mb-3">
                    <p className="text-4xl font-bold inline border-b-4 border-cyan-500 text-left">
                        Skills
                    </p>
                    <p className="pt-5 text-xl text-gray-500">
                        I enjoy diving into and learning new things. Here's a
                        list of technologies I've worked with
                    </p>
                </div>

                <div className="pt-20">
                    <AliceCarousel
                        mouseTracking
                        infinite
                        autoPlayInterval={1000}
                        animationDuration={1500}
                        disableDotsControls
                        disableButtonsControls
                        responsive={responsive}
                        autoPlay
                        items={items}
                    />
                </div>
            </div>
        </div>
    );
};
export default Skills;
