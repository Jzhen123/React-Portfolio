import React from 'react';
import Splash from './Splash';
import Yosemite from './Yosemite.png';
import './App.css';
import About from './About';

function App() {
    return (
        <>
            <Splash image={Yosemite} />
            {/* <About image={Yosemite} /> */}
        </>
    )
}

export default App;