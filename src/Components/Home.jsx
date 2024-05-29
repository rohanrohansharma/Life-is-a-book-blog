import React from 'react'
import '../css/home.css'
import Header from './Header'
import Footer from './Footer'
import About from './About'
import { useNavigate } from "react-router-dom";
import Contact from './Contact'


function Home(){

    const navigate = useNavigate()

    const gotToNewPage=()=>{
      navigate("/blog");
    }
    return(
        <>
        <Header /><br></br>
        <div className="home-container">
           
                <img src={require('../images/a.jpg')} className="home-img" alt="my-image"></img>
                <p className='paragraph'>Here, You Can Create Any Blog Easily By Clicking On The Create Blog Button</p>
               
                <button className='home-button' onClick={() => gotToNewPage()}>CREATE BLOG</button>
                
            
        </div> 
        <br></br><br></br><br></br>
        
        <About />
        
        <Contact/>
        <img src={require('../images/contact.jpg')} className="home-img1" alt="my-image"></img>
        <Footer />
        </>
)
}


export default Home