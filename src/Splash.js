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

    render() {
        
        return (
            <>
                <div id="Hero" className="main-picture" style={{ backgroundImage: `url(${this.mainImage})` }}>

                    <div className="text">
                        <h1>Hi,<br></br>I'm Jimmy Zheng!</h1>
                        <h3 className="mt-2">
                            <i>Full Stack Web Developer continuously improving <br></br>
                            to reach new heights</i>
                        </h3>
                        <button type="button" onClick={this.changeScreen} className="btn btn-outline-light rounded-0">About Me</button>
                    </div>
                    <Scroll />
                </div>

                <div className="page-wrapper chiller-theme toggled">
                    <a id="show-sidebar" className="btn btn-sm btn-dark" href="#">
                        <i className="fas fa-bars"></i>
                    </a>
                    <nav id="sidebar" className="sidebar-wrapper">
                        <div className="sidebar-content">
                            <div className="sidebar-brand">
                                <a href="#">pro sidebar</a>
                                <div id="close-sidebar">
                                    <i className="fas fa-times">X</i>
                                </div>
                            </div>
                            <div className="sidebar-header">

                            </div>
                            <div className="sidebar-search">
                            </div>
                            <div className="sidebar-menu">

                            </div>
                        </div>
                        <div className="sidebar-footer">
                            <a href="#">
                                <i className="fa fa-power-off"></i>
                            </a>
                        </div>
                    </nav>

                </div>
            </>
        )
    }
}

export default Splash;