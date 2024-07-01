import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import {LoginUser} from "./loginfunc"
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';


function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    

    const loginbutton = (event) => {
        event.preventDefault();
        LoginUser({email, password}, dispatch, navigate);
    };


    return(
        <main className="main bg-dark">
            <section className="sign-in-content">
                <FontAwesomeIcon icon={faCircleUser} />
                <h1>Sign In</h1>
                <form>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input type="text" value={email} onChange={(evt) => setEmail(evt.target.value)}  id="username"/>
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input type="password" value={password} onChange={(evt) => setPassword(evt.target.value)} id="password"/>
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me"/>
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <button onClick={loginbutton} className="sign-in-button">Sign In</button>
                </form>
            </section>
        </main>
    )
}

export default Login