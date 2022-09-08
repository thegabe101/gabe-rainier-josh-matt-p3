import React, { Component, useState, useEffect } from "react";
import API from "../utils/API";
import { useForm } from "react-hook-form";
import "../styles/LoginForm.css";
import { id } from "date-fns/locale";
import { useHistory } from "react-router-dom";



export default function LoginForm() {
    const { register, handleSubmit, err } = useForm()
    const [user, setUser] = useState({
        id: 0,
        email: ''
    })
    const [token, setToken] = useState("")

    useEffect(() => {
        const storedToken = localStorage.getItem("token");
        API.checkToken(storedToken).then(res => {
            if (!res.ok) {
                console.log("invalid token!")
                // localStorage.removeItem("token")
            }
            else {
                console.log("valid token")
                res.json().then(data => {
                    setToken(storedToken)
                    setUser({
                        id: data.id,
                        email: data.email
                    })
                })
            }
        })
    }, [])

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
            API.loginCoach(data.email, data.password, data.isCoach).then(res => {
                if (!res.ok) {
                    setUser({ userId: 0, email: "" });
                    setToken("")
                    return;
                } console.log(res.json)
                window.location = "/home";
                return res.json()
            }).then(data => {
                console.log(data)
                localStorage.setItem("isCoach", data.user.isCoach)
                localStorage.setItem("id", data.user.id)
                setUser({
                    id: data.user.id,
                    email: data.user.email,
                    isCoach: data.user.isCoach
                })
                setToken(data.token)
                localStorage.setItem("token", data.token)
            }).catch((err) => {
                console.log({ msg: "nope", err: (err) })
            })
        }
        else if (radioValues.radAnswer === "client") {
            console.log("we made it")
            API.loginClient(data.email, data.password, data.isCoach).then(res => {
                if (!res.ok) {
                    setUser({ userId: 0, email: "" });
                    setToken("")
                    return;
                } console.log(res.json)
                window.location = "/home";
                return res.json()
            }).then(data => {
                console.log(data)
                localStorage.setItem("isCoach", data.user.isCoach)
                localStorage.setItem("id", data.user.id)
                setUser({
                    id: data.user.id,
                    email: data.user.email,
                    isCoach: data.user.isCoach
                })
                setToken(data.token)
                localStorage.setItem("token", data.token)
            })
            // .catch((err) => {
            //     console.log({ msg: "nope", err: (err) })
            // })
        }
    }

    let history = useHistory();

    return (
        <div><div>
            <div className="form-container sign-in-container">
                <form className="signinForm" onSubmit={handleSubmit(onSubmit)} action="#">
                    <h1 className="signIn">Welcome to liftr</h1>
                    <div onChange={setRadAnswer} className="coolStyleOuter">
                        <div className="glowingText">
                            <input name="radAnswer" type="radio" label="check" id="checkClient" value="client"></input>
                            <label for="client" className="entry">I am a client.</label>
                            <input name="radAnswer" type="radio" label="check" id="checkCoach" value="coach"></input>
                            <label for="coach" className="entry">I am a coach.</label>
                        </div>
                    </div>
                    <h1 className="signIn">Sign in</h1>
                    <input className="signyInput" type="text" placeholder="email" name="email" {...register('email')} />
                    <input className="signyInput" type="password" placeholder="Enter your password" name="password" {...register('password')} />
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
                        {/* <a href="/signup"><button className="ghost logButton" id="signUp">Sign Up</button></a> */}
                        <button className="ghost logButton" id="signUp" onClick={() => {
                            history.push("/signup");
                        }}>Sign Up</button>
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

