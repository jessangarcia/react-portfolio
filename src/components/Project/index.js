import React from "react";
import data from '../../ProjectData/index'

const Projects = () => {
    return (
        <main>
            <>
            {data.map((project, i) => (
                <div>
                    <div className="project-container">
                        <div id="projects">
                            <h3 id="project-name">{project.name}</h3>
                            <img
                                alt={project.name}
                                src={project.photo}
                                className='projectPhoto'
                            />
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
        </main>
    )
}

export default Projects;