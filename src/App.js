import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Contact from './Components/Contact';
import About from './Components/About';
import Help from './Components/Help';


function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<About />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="help" element={<Help/>} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
