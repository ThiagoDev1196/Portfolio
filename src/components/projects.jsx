import { useState } from 'react';
import { projects } from '../data/projects.js';

export default function Projects() {

const [index, setIndex] = useState(0);

let project = projects[index];

function handleNext() {
    if(index < projects.length -1){
        setIndex(index + 1);
    }
    else {
        setIndex(0);
    }
}

function handlePrev() {
    if (index > 0) {
        setIndex(index - 1);
    } else {
        setIndex(projects.length - 1);
    }
}

const currentProject = projects[index];

return (

    <>

    <h2 className="text-3xl font-bold py-4 text-white text-center md:text-4xl lg:text-5xl lg:mb-8">Projects</h2>

    <div className="projects-container flex flex-col text-white justify-center items-center p-2 h-160 md:flex-row-reverse md:h-auto md:p-4 lg:h-full">

    <button onClick={handleNext} className="button-md hidden md:flex text-gray-500 px-6 text-3xl cursor-pointer hover:text-white lg:text-5xl"> › </button>

        <div className="project-text-container flex flex-col justify-center items-center space-y-4 p-2 md:px-5">
            <h3 className="text-lg font-semibold md:text-2xl">{currentProject.name} </h3>
            <p className="text-sm text-center md:text-start md:h-50 md:flex md:justify-center md:items-center md:text-md lg:text-lg">{currentProject.desc}</p>
            <a href={currentProject.link} target="_blank" className="bg-white text-black px-4 py-2 text-sm md:text-md lg:text-lg lg:px-6 rounded-lg hover:bg-gray-200">Visit the page</a>
        </div>
        <div className="project-img-container max-w-120 pt-4 md:min-w-100 md:max-w-160">
            <img className="w-full h-full " src={currentProject.img} alt="project picture preview" />
        </div>

        <div className="project-button-container space-x-3 mt-auto mb-36 md:hidden">
            <button onClick={handlePrev} className="bg-white text-sm text-black px-4 py-2 rounded-lg hover:bg-gray-200">Previous</button>
            <button onClick={handleNext} className="bg-white text-sm text-black px-4 py-2 rounded-lg hover:bg-gray-200">Next</button>
        </div>
    
    <button onClick={handlePrev} className="button-md hidden md:flex text-gray-500 px-6 text-3xl cursor-pointer hover:text-white lg:text-5xl">‹</button>

    </div>
    </>
)

}