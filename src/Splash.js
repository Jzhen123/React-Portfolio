import React from 'react';
import './Splash.css';
import Scroll from './Scroll';

class Splash extends React.Component {
    constructor(props) {
        super(props);
        this.mainImage = props.mainImage;
    }

    changeScreen() {
        console.log("hi")
        document.getElementById("Hero").style.background = 'linear-gradient(to right, rgba(0, 0, 0, 0.1) 10%,rgba(0, 0, 0, 0.4) 35%,rgba(0, 0, 0, .8) 50%)';
    }



    /* Set the width of the side navigation to 250px */
    openNav() {
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    }

    /* Set the width of the side navigation to 0 */
    closeNav() {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
        document.body.style.backgroundColor = "white";
    }

    render() {

        return (
            <>
                <div id="mySidenav" className="sidenav">
                    <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav} >&times;</a>
                    {/* <a href="#">Skills</a> */}
                    <a href="#">Portfolio</a>
                    <a href="#">Blog</a>
                    <a href="#">Contact</a>
                </div>

                <header id="main">
                    <img src={this.props.mainImage}></img>

                    <span id="menu" onClick={this.openNav}>&#9776;</span>
                    <div className="text">
                        <h1>Hi,<br></br>I'm Jimmy Zheng!</h1>
                        <h3 className="mt-2">
                            <i>Full Stack Web Developer continuously improving <br></br>
                            to reach new heights</i>
                        </h3>
                        <button type="button" onClick={this.changeScreen} className="btn btn-outline-light rounded-0">About Me</button>
                    </div>
                    <Scroll />
                </header>
            </>
        )
    }
}

export default Splash;