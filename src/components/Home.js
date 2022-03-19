import React from 'react';
// import Navbar from "./components/Navbar"
// import Footer from "./components/Footer";
import Movies from "../Pages/Movies"
import Imagesilder from "./Imagesilder"


function Home() {
    return (
        <div className="App">
            <Imagesilder />
            <Movies />
        </div>
    );
}


export default Home;