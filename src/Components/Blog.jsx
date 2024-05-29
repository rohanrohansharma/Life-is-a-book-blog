import react, { useState } from 'react'
import Header from './Header';
import '../css/blog.css';
import axios from 'axios';
import Footer from './Footer'
import { useNavigate } from 'react-router-dom';

function Blog() {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [imagedescription, setImagedescription] = useState('');
    const [uploadedFilePath , setUploadedFilePath]= useState('')
    


    const handleFileChange= async(e)=>{
        const selectedFile = e.target.files[0];

        try{
            const formData = new FormData();
            formData.append('file',selectedFile);
            const response = await axios.post('http://localhost:3100/upload/api/upload',formData,{
                headers:{
                    'Content-Type': 'multipart/form-data',
                },
            });
            setUploadedFilePath(response.data.path) 

        }

        catch(error){
            console.log(error);
        }
    }

    const handleblog= async(e)=>{
        e.preventDefault();

        try{
            const response = await axios.post('http://localhost:3100/blog/api/blogs',{title,description,imagedescription,image:uploadedFilePath});
            console.log("successful" , response.data);
            navigate('/allblog');
        }
        catch(error){
            console.error("error" , error);
        }
    }
    return (
        <>
            <Header />

            <div className='colorChange4'>
                <div className='container4'>
                    <form onSubmit={handleblog}>
                        <h1 className='registername4'>Create Blog</h1><br /><br />
                        <div className="font4" >
                            <label >Title</label><br />
                            <input type="text" className="text4" placeholder="Enter Title" value={title} onChange={(e) => setTitle(e.target.value)} ></input><br /><br />
                        </div>

                        <div className="font4" >
                            <label>Description</label><br />
                            <textarea className="text4"  placeholder='Enter Blog Description' style={{height:"100px"}}  value={description} onChange={(e) => setDescription(e.target.value)} ></textarea><br /><br />
                        </div>

                        <div className="font4"  >
                            <label>Image Description</label><br />
                            <textarea className="text4" placeholder="Enter Image Description" style={{height:"100px"}}  value={imagedescription} onChange={(e) =>setImagedescription(e.target.value)}></textarea><br /><br />
                        </div>

                        <div className='font4'>
                            <input type='file' className='text4' onChange={handleFileChange}></input><br /><br />
                        </div>

                        <div >
                            <button type="submit" className='btn4' >Create Blog</button>
                        </div>


                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Blog;