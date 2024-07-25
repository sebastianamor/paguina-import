import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import NavBar from './NavBar';
import Home from './Home';
import Services from './Services';
import Contact from './Contact';
import Map from './Map';
import Footer from './Footer';
import Blog from './Blog';
import FloatingButton from './FloatingButton';

function App() {
  const [selectedSection, setSelectedSection] = useState('home');

  const handleSelect = (section) => {
    setSelectedSection(section);
  };

  return (
    <div className="App">
      <Header />
      <NavBar onSelect={handleSelect} />
      <main>
        {selectedSection === 'home' && <Home />}
        {selectedSection === 'services' && <Services />}
        {selectedSection === 'contact' && <Contact />}
        {selectedSection === 'location' && <Map />}
        {selectedSection === 'blog' && <Blog />}
      </main>
      <Footer />
      <FloatingButton />
    </div>
  );
}

export default App;
