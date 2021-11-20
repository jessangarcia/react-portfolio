import React from "react";
import data from '../../ProjectData/index'

const Projects = () => {
    return (
        <>
            {data.map((project, i) => (
                <div>
                    <div className="project-container">
                        <img
                            alt={project.name}
                            src={project.photo}
                            className='projectPhoto'
                        />
                        <div>
                            <h3>{project.name}</h3>
                            <ul>
                                <li>
                                    <a href={project.github} target="_blank" rel="noreferrer">Repository</a>
                                </li>
                                <li>
                                    <a href={project.deploy} target="_blank" rel="noreferrer">Demo</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Projects;