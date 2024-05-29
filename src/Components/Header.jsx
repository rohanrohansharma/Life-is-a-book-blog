import react from 'react'
import '../css/header.css'
import { useNavigate } from 'react-router-dom';

function Header(){
  const Navigate = useNavigate();
  const handleLogout=()=>{
    localStorage.removeItem("user");
    Navigate('/login');

  }
    return(
    <div className='header'>
    <div className='header-container'>
          <div>
            <h1 className='title'>LIFE IS A BLOG BOOK</h1>
          </div>
          
          <ul className="navigation">
            <li><a href="/home">HOME</a></li>
            <li><a href="/blog">CREATE BLOG</a></li>
            <li><a href="/allblog">All BLOG</a></li>
            <li><a href="/aboutus">ABOUT</a></li>
            <li><a href="/contactus">CONTACT US</a></li>
            <li><button className='logout-btn' onClick={handleLogout}>Logout</button></li>
          </ul>
         
    </div> 
    </div> 
    )
}

export default Header;