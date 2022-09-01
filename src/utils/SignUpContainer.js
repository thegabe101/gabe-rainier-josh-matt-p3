import React, { Component } from "react";
import SignUpForm from "../views/Signup";
import API from "../utils/API";
const axios = require("axios");
const FormValidators = require("./validate");
const validateSignUpForm = FormValidators.validateSignUpForm;
const zxcvbn = require("zxcvbn");
const URL_PREFIX = "http://localhost:3001"

class SignUpContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            errors: {},
            user: {
                username: "",
                email: "",
                password: "",
                pwconfirm: ""
            },
            btnTxt: "show",
            type: "password",
            score: "0"
        };

        this.pwMask = this.pwMask.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.submitSignup = this.submitSignup.bind(this);
        this.validateForm = this.validateForm.bind(this);
        this.pwHandleChange = this.pwHandleChange.bind(this);
    }

    handleChange(event) {
        const field = event.target.name;
        const user = this.state.user;
        user[field] = event.target.value;

        this.setState({
            user
        });
    }

    pwHandleChange(event) {
        const field = event.target.name;
        const user = this.state.user;
        user[field] = event.target.value;

        this.setState({
            user
        });

        if (event.target.value === "") {
            this.setState(state =>
                Object.assign({}, state, {
                    score: "null"
                })
            );
        } else {
            var pw = zxcvbn(event.target.value);
            this.setState(state =>
                Object.assign({}, state, {
                    score: pw.score + 1
                })
            );
        }
    }



    submitSignup(user) {
        var params = { username: user.usr, email: user.email, password: user.pw };
        axios
            .post(`${URL_PREFIX}/api/coaches`, params)
            .then(res => {
                console.log(res)
                if (res.data.success === true) {
                    localStorage.token = res.data.token;
                    localStorage.isAuthenticated = true;
                    window.location.reload()
                } else {
                    this.setState({
                        errors: { message: res.data.message }
                    });
                }
            })
            .catch(err => {
                console.log("Sign up data submit error: ", err);
            });
    }

    validateForm(event) {
        event.preventDefault();
        var payload = validateSignUpForm(this.state.user);
        if (payload.success) {
            this.setState({
                errors: {}
            });
            var user = {
                usr: this.state.user.username,
                email: this.state.user.email,
                pw: this.state.user.password
            };
            this.submitSignup(user);
        } else {
            const errors = payload.errors;
            this.setState({
                errors
            });
        }
    }

    pwMask(event) {
        event.preventDefault();
        this.setState(state =>
            Object.assign({}, state, {
                type: this.state.type === "password" ? "input" : "password",
                btnTxt: this.state.btnTxt === "show" ? "hide" : "show"
            })
        );
    }

    render() {
        return (
            <div>
                <SignUpForm
                    onSubmit={this.validateForm}
                    onChange={this.handleChange}
                    onPwChange={this.pwHandleChange}
                    errors={this.state.errors}
                    user={this.state.user}
                    score={this.state.score}
                    btnTxt={this.state.btnTxt}
                    type={this.state.type}
                    pwMask={this.pwMask}
                />
            </div>
        );
    }
}

export default SignUpContainer;
