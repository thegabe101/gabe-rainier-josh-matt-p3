// import React, { useEffect } from 'react';
// import LoginForm from '../views/LoginForm';
// import { useNavigate } from 'react-router-dom';

// export default function Login(props) {
//     const navigate = useNavigate();
//     useEffect(() => {
//         if (props.userId) {
//             navigate(`/profile/${props.userId}`)
//         }
//     }, [props.userId])
//     return (
//         <div className="Login">
//             <LoginForm type="Login" handleSubmit={props.handleLogin} />
//             <LoginForm type="Signup" handleSubmit={props.handleSignup} />
//         </div>
//     )
// }