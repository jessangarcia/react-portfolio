import React from 'react';

const Header = () => {
    return (
        <section id="hero"className="my-5">
            <div>
                <img alt="headshot" id="me" src={require('../../assets/images/me.jpg').default} />
                <h2 id="hero-text" className="flex-row">Welcome</h2>
            </div>
        </section>
    )
}

export default Header;