import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <header>
                <h2>Jessenia Garcia</h2>
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
                            <Link to='/resume'>Resume</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </nav>
    )
}

export default Nav;