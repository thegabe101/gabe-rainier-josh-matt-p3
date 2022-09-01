import React, { useState } from "react";


export default function LoginForm(props) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const submit = e => {
        e.preventDefault();
        props.handleSubmit(email, password);
    }
    return (
        <section className="loginPage flex justify-center h-screen p-5">
            <header>{props.type}</header>
            <form className="loginForm flex flex-col justify-center" id="login-page" onSubmit={submit}>
                <p className="text-4xl pb-4 self-center">liftr</p>
                <p className="text-2xl self-center pb-4">Log in</p>
                <label htmlFor="login-email" className="pb-1">Email</label>
                <input value={email} type="text" id="login-email" name="login-email" className="border rounded-md mb-3 focus:outline-[#ff828f]" onChange={e => setEmail(e.target.value)} />
                <label htmlFor="login-password" className="pb-1">Password</label>
                <input value={password} type="password" id="login-password" name="login-password" className="border rounded-md mb-3 focus:outline-[#ff828f]" autoComplete="off" onChange={e => setPassword(e.target.value)} />
                <section className="flex content-center justify-end">
                    <label htmlFor="showPassword" className="text-slate-500 text-sm mx-2">Show Password</label>
                    <input className="float-right accent-[#ff828f]" type="checkbox" name="showPassword" onclick="showPw()" />
                </section>
                <button className="self-center w-1/2 loginBtn border rounded-md mt-3 text-white bg-[#ff4797] hover:bg-white hover:text-black hover:border-[#ff4797] hover:border-2" >{props.type}Login</button>
                <p className="text-sm text-slate-500 self-center pt-1">Don't have an account with us? <a href="/signup" className="hover:text-[#4C243B]">Sign up here</a>.</p>
            </form>
        </section>
    )
}



