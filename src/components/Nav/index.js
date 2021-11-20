import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <header>
            <h1>Jessenia Garcia</h1>
            <nav>
                <ul>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    <li>
                        <Link to='/project'>Projects</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact</Link>
                    </li>
                    <li>
                        <a href="../../src/assets/jessie-resume.pdf" download>Resume</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav;