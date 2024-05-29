import react from 'react'
import { useState } from 'react'
import axios from 'axios';
import {useNavigate } from 'react-router-dom';
import '../css/register.css'


function Register() {
    const navigate = useNavigate();
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    
    const handleRegister = async (e) => {
        e.preventDefault();

            const url = 'http://localhost:3100/register/api/signup';

            const response = await axios.post(url, { name, email, password})
          
            console.log("successful", response.data);
            navigate('/login');
        }

    return (
      
     <div className='colorChange'>
        <div className='container1'>
           
            <form onSubmit={handleRegister}>
                <h1 className='registername'>Register</h1><br/><br/>
                <div className="font-register" >
                <label >Username</label><br/>
                <input type="text" className="text-register" name="username" placeholder="Enter Username" value={name} onChange={(e) => setName(e.target.value)} /><br /><br />
                </div>
                
                <div  className="font-register" >
                <label>Email</label><br/>
                <input type="text"  className="text-register" name="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} /><br /><br />
                </div>

                <div  className="font-register"  >
                <label>Password</label><br/>
                <input type="password" className="text-register" name="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} /><br /><br />
                </div>

                <div>
                <button type="submit" className='btn-register' >Sign Up</button>
                
                </div>
                <div className='account-register'>
                <a href='/login'>Already Have An Account</a>
                </div>

               
            </form>
        </div>
    </div>
    )
}


export default Register