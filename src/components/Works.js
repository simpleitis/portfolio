import React from 'react';
import ProjectCard from './ProjectCard';

const Works = () => {
    return (
        <div
            name="work"
            className="w-full min-h-screen text-gray-300 bg-[#0a192f]  sm:pt-16 md:pt-16"
        >
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="pb-4 w-full flex justify-center items-center flex-col">
                    <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500">
                        Work
                    </p>
                    <p className="sm:py-4 text-base text-gray-500">
                        Check out some of my most recent work
                    </p>
                </div>
                {/* Container */}
                <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-4 ">
                    {/* Grid Item */}
                    <ProjectCard
                        name="Studio"
                        description="NFT marketplace"
                        link="https://github.com/simpleitis/nextjs-studio"
                    />
                    <ProjectCard
                        name="CrowdCoin"
                        description="Crowdfunding app"
                        link="https://github.com/simpleitis/crowd-coin"
                    />
                    <ProjectCard
                        name="Raffle"
                        description="Online lottery"
                        link="https://github.com/simpleitis/nextjs-raffle"
                    />
                </div>
            </div>
        </div>
    );
};
export default Works;
