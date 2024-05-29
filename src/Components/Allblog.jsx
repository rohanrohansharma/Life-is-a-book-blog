import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ShowBlog from './ShowBlog';
import "../css/allblog.css"
import Header from './Header'
import Footer from './Footer'


function Allblog(){
    const [blog , setBlog]=useState([]);

    useEffect(()=>{
        const fetchBlog = async()=>{
            try{
                const response = await axios.get('http://localhost:3100/blog/api/blogs');
                setBlog(response?.data);
                // console.log(blog);
            }
            catch(error){
               console.error(error);
            }
        };
        fetchBlog();
    },[]);


    return(
        <>
        <Header />
        <div className='allblogs-container'>
            
           {

            blog.map( (curr )=>{
                return (
                    
                    <ShowBlog key={curr.id} {...curr} />
                )
            })
           }
        </div>
        <Footer />
        </>
    )
}

export default Allblog;