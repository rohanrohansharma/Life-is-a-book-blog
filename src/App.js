
import './App.css';
import {BrowserRouter , Routes ,Route} from "react-router-dom";
import Register from './Components/register'
import Home from './Components/Home'
import Login from './Components/Login'
import Blog from './Components/Blog'
import Footer from './Components/Footer'
import AboutUs from './Components/Aboutus'
import Allblog from './Components/Allblog'
import Contactus from './Components/Contactus'



function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>  
        <Route path="/home" element={<Home />}/>  
        <Route path="/register" element={<Register />}/> 
        <Route path="/login" element={<Login/>}/> 
        <Route path="/blog" element={<Blog />}/>
        <Route path="/footer" element={<Footer />}/>
        <Route path="/aboutus" element={<AboutUs />}/>
        <Route path="/allblog" element={<Allblog />}/>
        <Route path="/contactus" element={<Contactus />}/>
     
     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App;
