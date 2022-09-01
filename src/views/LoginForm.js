import React, { Component, useState, useEffect } from "react";
import API from "../utils/API";
import { useForm } from "react-hook-form";
import "../styles/LoginForm.css";



export default function LoginForm() {


    const { register, handleSubmit, err } = useForm()
    const [user, setUser] = useState({
        id: 0,
        email: ''
    })


    const onSubmit = data => {
        console.log(data)
        API.login(data.email, data.password);
    }


    return (
        <div>
            <h2>Weekly Coding Challenge #1: Sign in/up Form</h2>
            <div className="container" id="container">
                <div className="form-container sign-up-container">
                    <form action="#">
                        <h1>Create Account</h1>
                        <div className="social-container">
                            <a href="#" className="social"><i className="fab fa-facebook-f" /></a>
                            <a href="#" className="social"><i className="fab fa-google-plus-g" /></a>
                            <a href="#" className="social"><i className="fab fa-linkedin-in" /></a>
                        </div>
                        <span>or use your email for registration</span>
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <a href="/login"><button className="logButton">Sign Up</button></a>
                    </form>
                </div>
                <div className="form-container sign-in-container">
                    <form onSubmit={handleSubmit(onSubmit)} action="#">
                        <h1>Welcome to liftr</h1>
                        <h1 className="signIn">Sign in</h1>
                        <input type="text" placeholder="email" name="email" {...register('email')} />
                        <input type="password" placeholder="Enter your password" name="password" {...register('password')} />
                        <a href="#" className="forgot">Forgot your password?</a>
                        <button className="logButton">Sign In</button>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <button className="ghost" id="signIn">Sign In</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>or</h1>
                            <p>If you haven't signed up yet, please click the button below.</p>
                            <button className="ghost logButton" id="signUp">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

// class LoginForm extends Component {


//     //     const { register, handleSubmit, err } = useForm()
//     // const [user, setUser] = useState({
//     //     id: 0,
//     //     email: ''
//     // })


//     onSubmit(data) {
//         data.preventDefault()
//         console.log(data)
//         API.login(data.email, data.password);
//         this.props.history.push('/home');
//     }

//     render() {
//         return (
//             <div>
//                 <h2>Weekly Coding Challenge #1: Sign in/up Form</h2>
//                 <div className="container" id="container">
//                     <div className="form-container sign-up-container">
//                         <form action="#">
//                             <h1>Create Account</h1>
//                             <div className="social-container">
//                                 <a href="#" className="social"><i className="fab fa-facebook-f" /></a>
//                                 <a href="#" className="social"><i className="fab fa-google-plus-g" /></a>
//                                 <a href="#" className="social"><i className="fab fa-linkedin-in" /></a>
//                             </div>
//                             <span>or use your email for registration</span>
//                             <input type="text" placeholder="Name" />
//                             <input type="email" placeholder="Email" />
//                             <input type="password" placeholder="Password" />
//                             <a href="/login"><button>Sign Up</button></a>
//                         </form>
//                     </div>
//                     <div className="form-container sign-in-container">
//                         <form onSubmit={this.onSubmit.bind(this)} action="#">
//                             <h1>Sign in</h1>
//                             <div className="social-container">
//                                 <a href="#" className="social"><i className="fab fa-facebook-f" /></a>
//                                 <a href="#" className="social"><i className="fab fa-google-plus-g" /></a>
//                                 <a href="#" className="social"><i className="fab fa-linkedin-in" /></a>
//                             </div>
//                             <span>or use your account</span>
//                             <input type="text" placeholder="email" name="email" />
//                             <input type="password" placeholder="Enter your password" name="password" />
//                             <a href="#">Forgot your password?</a>
//                             <button>Sign In</button>
//                         </form>
//                     </div>
//                     <div className="overlay-container">
//                         <div className="overlay">
//                             <div className="overlay-panel overlay-left">
//                                 <h1>Welcome Back!</h1>
//                                 <p>To keep connected with us please login with your personal info</p>
//                                 <button className="ghost" id="signIn">Sign In</button>
//                             </div>
//                             <div className="overlay-panel overlay-right">
//                                 <h1>Hello, liftr!</h1>
//                                 <p>If you haven't signed up yet, please click the button below.</p>
//                                 <button className="ghost" id="signUp">Sign Up</button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div >
//         )
//     }
// }

// export default withRouter(LoginForm);

