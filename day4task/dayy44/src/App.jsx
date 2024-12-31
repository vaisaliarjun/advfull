import './App.css'

import './assets/css/Navbar.css';
import Home from './Components/function/Home';
import About from './Components/function/About';
import Contact from './Components/function/Contact';
import Gallery from './Components/function/Gallery';
import NavBar from './Components/function/NavBar';
import './components/function/Contact.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {
 

  return (
   <div>
    <BrowserRouter>
    <NavBar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About college="kongu engineering " clg1="kongu arts" clg2 ="kongu naturopathy"/>}/>
    <Route path='/gallery' element={<Gallery/>}/>
    <Route path='/contact' element={<Contact/>}/>
    </Routes>
    
    </BrowserRouter>
    
    
      
    </div>
      
    
  );
}

export default App;