import './App.css'
import './assets/NavBar.css';
import Home from './Components/function/Home';
import About from './Components/function/About';
import Contact from './Components/function/Contact';
import Gallery from './Components/function/Gallery';
import NavBar from './Components/function/NavBar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import UseEffect from './Components/function/UseState';
import UseRef from './Components/function/UseRef';
import ExamResults from './Components/function/UseContext';
import UseMemo from './Components/function/UseMemo';
import UseState from './Components/function/UseState';
function App() {
  return (
   <div>
    <BrowserRouter>
    <NavBar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About college="kongu engineering " clg1="kongu arts" clg2 ="kongu naturopathy"/>}/>
    <Route path='/gallery' element={<Gallery/>}/>
    <Route path='/useeffect' element={<UseEffect/>}/>
    
    <Route path='/useref' element={<UseRef/>}/>
    <Route path='/usecontext' element={<ExamResults/>}/>
    <Route path='/use-Memo' element={<UseMemo/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/usestate' element={<UseState/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
  