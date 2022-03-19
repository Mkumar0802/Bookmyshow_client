import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar"
import Footer from "./components/Footer";
import Movies from "./Pages/Movies";
import Home from './components/Home';
import Stream  from './Pages/Stream';
import Contact from './Pages/Contact';
import Events  from './Pages/Events';
import Sports from './Pages/Sports';
import Coporate from './Pages/Corporate'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          {/* <Route path="/" element={<App />} /> */}
          <Route path="movies" element={<Movies />} />
          <Route path="stream" element={<Stream />} />
          <Route path="contact" element={<Contact />} />
          <Route path="events" element={<Events />} />
          <Route path="sports" element={<Sports />} />
          <Route path="Coporate" element={<Coporate/>} />

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