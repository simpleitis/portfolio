import React from 'react'

function ProjectCard({name, description, link}) {
  return (
      <div className="col-span-1 mb-5 w-full   rounded-lg transform duration-500 hover:-translate-y-3 sm:mt-5 xl:mt-0">
          <center>
              <div className="group">
                  <div className="max-w-sm overflow-hidden">
                      <div className="bg-lime-100 rounded-t p-5 sm:px-10 sm:py-5 lg:p-2">
                          <img
                              className="w-full h-72 p-5"
                              src={`${name}.png`}
                              alt="NFT"
                          />
                      </div>
                      <div className="px-6 pt-4 bg-[#243f68]">
                          <div className="flex flex-col flex-wrap justify-between">
                              <p className="font-bold text-xl">{name}</p>
                              <p className="mb-5 font-semibold text-sm ">
                                  {description}
                              </p>
                              <a
                                  className="inline-block rounded-full px-3 py-1 text-base font-bold text-slate-200 border mr-2 mb-2 hover:bg-white hover:text-slate-700"
                                  href={link}
                              >
                                  View code
                              </a>
                          </div>
                      </div>
                  </div>
              </div>
          </center>
      </div>
  );
}

export default ProjectCard