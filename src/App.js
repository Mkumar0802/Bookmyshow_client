import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar"
import Footer from "./components/Footer";

import Movies from "./components/Movies";
import Home from './components/Home';
import Events  from './components/Events';
 

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          {/* <Route path="/" element={<App />} /> */}
          <Route path="movies" element={<Movies />} />
          <Route path="events" element={<Events />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>Page in Deveploment!</p>
              </main>
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;