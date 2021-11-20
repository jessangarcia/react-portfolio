import React from 'react';

const About = () => {
    return (
        <section className="my-5">
            <div>
                <img alt="headshot" id="me" src={require('../../assets/me.jpg').default} />
                <h2 id="about" className="flex-row">About Me</h2>
            </div>
            <div>
                <p>
                    I'm a Full-Stack Developer who got her certification from the University of Utah. Always eager to continue learning and seeing where life takes me.
                    During my time I realized how fun coding is, and how much more I can learn. When I'm not coding, I still somehow end up on my computer anyways, playing games, and learning how to play bass. 
                    Always on the quest for things that will challenge me or help me gain more knowledge in the field I'm currently in. 
                </p>
            </div>
        </section>
    )
}

export default About;