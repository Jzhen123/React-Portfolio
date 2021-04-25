import React, { useState, useEffect } from 'react';
import './Splash.css';
import Scroll from './Scroll';
import Menu from './Menu';

function Splash({ image }) {
    const [mainImage, setMainImage] = useState(image);

    const openNav = () => {
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    }

    const closeNav = () => {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
        document.body.style.backgroundColor = "white";
    }

    return (
        <>
            <Menu />
            <header id="main">
                <img src={mainImage}></img>
                <span id="menu" onClick={openNav}>&#9776;</span>
                <div className="text">
                    <h1>Hi,<br></br>I'm Jimmy Zheng!</h1>
                    <h3 className="mt-2">
                        <i>Full Stack Web Developer continuously improving <br></br>
                            to reach new heights</i>
                    </h3>
                    <a href="#about" className="btn btn-outline-light rounded-0">About Me</a>
                </div>
                <Scroll />
            </header>

            {/* Below the Fold */}
            <header id="about">
                <img src={mainImage}></img>
            </header>
        </>
    )
}


export default Splash;