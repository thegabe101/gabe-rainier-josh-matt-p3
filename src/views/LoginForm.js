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

    const [radioValues, setRadioValues] = useState({
        radAnswer: '',
    });

    const setRadAnswer = (event) => {
        console.log(event.target.value);
        setRadioValues({ ...radioValues, radAnswer: event.target.value });
        console.log(radioValues);
    };

    const onSubmit = data => {
        console.log(data)
        console.log(radioValues)
        if (radioValues.radAnswer === "coach") {
            API.loginCoach(data.email, data.password);
        } else API.loginClient(data.email, data.password);
    }



    return (
        <div><div>
            <div className="form-container sign-in-container">
                <form className="signinForm" onSubmit={handleSubmit(onSubmit)} action="#">
                    <h1 className="signIn">Welcome to liftr</h1>
                    <div onChange={setRadAnswer}>
                        <input name="radAnswer" type="radio" className="superCoolStyle" label="check" id="checkClient" value="client"></input>
                        <label for="client">I am a client.</label>
                        <input name="radAnswer" type="radio" className="superCoolStyle" label="check" id="checkCoach" value="coach"></input>
                        <label for="coach">I am a coach.</label>
                    </div>
                    <h1 className="signIn">Sign in</h1>
                    <input className="signyInput" type="text" placeholder="email" name="email" {...register('email')} />
                    <input className="signyInput" type="password" placeholder="Enter your password" name="password" {...register('password')} />
                    <a href="#" className="forgot">Forgot your password?</a>
                    <button className="logButton">Sign In</button>
                </form>
            </div>
            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-panel overlay-left">
                        <button className="ghost" id="signIn">Sign In</button>
                    </div>
                    <div className="overlay-panel overlay-right">
                        <h1 className="signInHeader">or</h1>
                        <p className="signInP">If you haven't signed up yet, please click the button below.</p>
                        <a href="/signup"><button className="ghost logButton" id="signUp">Sign Up</button></a>
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
//         )
//     }
// }

// export default withRouter(LoginForm);

