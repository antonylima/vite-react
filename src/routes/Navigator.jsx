import React from "react";
import { Link } from 'react-router-dom';

const Navigator = () =>{
    return(
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about?nm=vando&id=33">About me</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navigator;