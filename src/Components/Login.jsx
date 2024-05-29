import { useState } from 'react';
import { json, useNavigate } from 'react-router-dom';
import '../css/login.css';
function Login() {
    
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
       
        try {
            const response = await fetch("http://localhost:3100/login/api/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password })
            });

            if (!response.ok) {
                throw new Error('Network response is not ok');
            }
           
            localStorage.setItem("user",JSON.stringify(email));
       

            navigate('/home');


        } catch (error) {
            console.error('Error logging in:', error);
        }
    };

    return (
       
    <div className='colorChange'>
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <h1 className="login">Login</h1>
                <div className="font">
                    <label>Email</label>
                    <input type="text" className="text" name="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} /><br /><br />
                </div>

                <div className="font">
                <label>Password</label>
                <input type="password" className="text" name="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)}/><br /><br />
                </div>

                <div>
                <input type="submit" className='btn' value="Login" />
                </div>
            </form>
        </div>
    </div>    
    );
}

export default Login;
