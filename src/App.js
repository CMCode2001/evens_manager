import { Routes, Route } from "react-router-dom";
import Acceuil from './pages/Acceuil';
import Evens from './pages/Events';
import Prestataires from "./pages/Prestataires";
import About from "./pages/About";



function App() {
  return (
    <div className="App">    
      <Routes>
        <Route path = '/' element ={<Acceuil />} />
        <Route path = '/events' element ={<Evens />} />
        <Route path = '/prestataires' element ={<Prestataires />} />
        <Route path = '/about' element ={<About />} />
      </Routes>
    </div>
  );
}

export default App;
