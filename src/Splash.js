import React, { useState, useEffect } from 'react';
import './Splash.css';
import Scroll from './Scroll';
import Menu from './Menu';

function Splash({ image }) {
    const [mainImage, setMainImage] = useState(image);

    const temp = () => {
        alert("Sorry! This site doesn't have many features yet! Head over to https://awesome-weplan.web.app/ to see my Final Project progress.")
    }
    return (
        <>
            <header id="main">
                <Menu />
                <img src={mainImage}></img>

                <div className="text">
                    <h1>Hi,<br></br>I'm Jimmy Zheng!</h1>
                    <h3 className="mt-2">
                        <i>Full Stack Web Developer continuously improving <br></br> to reach new heights</i>
                    </h3>
                    <a href="/about" onClick={temp}className="btn btn-outline-light rounded-0">About Me</a>
                </div>

                <Scroll />
            </header>
        </>
    )
}


export default Splash;