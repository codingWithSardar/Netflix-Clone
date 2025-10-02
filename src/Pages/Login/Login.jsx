import React, { useState } from 'react'
import './Login.css'
import { login, signUp } from '../../firebase'
import logo from '../../assets/logo.png'

const Login = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLogged, setIsLogged] = useState("Sign In");

    const user_Auth = async (e) => {
        e.preventDefault();
        if (isLogged === "Sign In"){
            await login (email , password)
        }
        else {
            await  signUp(name , email , password)
        }
    }
    return (
        <div className='login'>
            <img src={logo} alt="" className='login-logo' />
            <div className="login-form">
                <h1>{isLogged}</h1>
                <form onSubmit={(e) => e.preventDefault()}>
                    {isLogged === "Sign Up" ? <input type='text' placeholder='name' value={name} onChange={(e) => setName(e.target.value)} /> : <></>}
                    <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button onClick={user_Auth}>{isLogged}</button>

                    <div className="form-help">
                        <div className="remember">
                            <input type="checkbox" />
                            <label >Remember me</label>
                        </div>
                        <p>Need help?</p>
                    </div>
                </form>

                <div className="form-switch">
                    {isLogged === "Sign In" ? <p>New to Netflix <span onClick={() => setIsLogged("Sign Up")}>Sign Up now</span></p>
                        :
                        <p >Already have account <span onClick={() => setIsLogged("Sign In")}>Sign In now</span></p>}


                </div>


            </div>
        </div>
    )
}

export default Login