import React from 'react'
import '../styles/Profile.css'
import { useAuth0 } from '@auth0/auth0-react'
import axios from 'axios';



const Profile = () => {
	const { user } = useAuth0()
	const {
		last_login,
		name,
		picture,
		email,
		nickname,
		logins_count,
		email_verified,
	} = user

	const URL_PREFIX = "http://localhost:3001";

	// axios.post(URL_PREFIX + "/api/coaches", {
	// 	firstName: 'Matth',
	// 	lastName: "Hoefyh",
	// 	username: 'mattmattt',
	// 	email: 'matt2@gmail.com',
	// 	password: 'password'
	// }).then(function (response) {
	// 	console.log(response)
	// })

	return (
		<div className='divBody'>
			<div className='row'>
				{/* this is the profile pic */}
				<div class='col-md-3 border-right'>
					<div class='d-flex flex-column align-items-center text-center p-3 py-5'>
						<img
							src={picture}
							alt='Profile'
							className='rounded-circle mt-5'
							width='150px'
						/>
						<span className='font-weight-bold'>{nickname}</span>
						<span className='text-black-50'>{email}</span>
						<span> </span>
					</div>
				</div>

				{/* Settings */}
				<div className='col-md-5 border-right'>
					<div className='p-3 py-5'>
						<div className='d-flex justify-content-between align-items-center mb-3'>
							<h4 className='text-right'>Profile Settings</h4>
						</div>
						<div className='row mt-2'>
							<div className='col-md-6'>
								<label className='labels'>Name</label>
								<input
									type='text'
									className='form-control'
									placeholder='First Name'
									value={nickname}
								/>
							</div>
							<div className='col-md-6'>
								<label className='labels'>Surname</label>
								<input
									type='text'
									className='form-control'
									placeholder='Surname'
									value={nickname}
								/>
							</div>
							<div className='row mt-3'>
								<div className='col-md-12'>
									<label className='labels'>Email</label>
									<input
										type='text'
										className='form-control'
										placeholder='Email'
										value={email}
									/>
								</div>
								<div className='col-md-12'>
									<label className='labels'>Phone</label>
									<input
										type='text'
										className='form-control'
										placeholder='Enter Phone Number'
										value=''
									/>
								</div>
							</div>
							<div className='row mt-3'>
								<div className='col-md-12'>
									<label className='labels'>Country</label>
									<input
										type='text'
										className='form-control'
										placeholder='Country'
										value='USA'
									/>
								</div>
								<div className='col-md-12'>
									<label className='labels'>State/Region</label>
									<input
										type='text'
										className='form-control'
										placeholder='State'
										value='Washington'
									/>
								</div>
								<div className='mt-5 text-center'>
									<button
										className='btn btn-primary profile-button'
										type='button'
									>
										Save Profile
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='col-md-4'>
					<div className='p-3 py-5'>
						<div className='d-flex justify-content-between align-items-center experience'>
							<span>Status</span>
							<span className='border px-3 p-1 add-experience'>
								<i className='fa fa-plus'></i>&nbsp;Status
							</span>
						</div>
						<br />
						<div className='col-md-12'>
							<label className='labels'>Status</label>
							<input
								type='text'
								className='form-control'
								placeholder='Status'
							/>
						</div>
						<br />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Profile

//GMS TODO: DO NOT DELETE! This is a default data token from auth0 that I am picking apart

//   return (
//     <div className='divBody'>
//       <div className="row align-items-center profile-header">
//         <div className="col-md-2 mb-3">
//           <img
//             src={picture}
//             alt="Profile"
//             className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
//           />
//         </div>
//         <div className="col-md text-center text-md-left">
//           <h2><span className='userText'>User:</span> {name}</h2>
//           <p className="lead text-muted"></p>
//         </div>
//       </div>
//       <div className="row">
//         <pre className="col-12 text-light bg-dark p-4">
//           {JSON.stringify(user, null, 2)};
//           {/*GMS these are just some call examples of the desctructured user token at the top of the page. Can grab anything, easily.}
//             {/* {JSON.stringify(user.picture)};
//             <img src={picture}></img> */}
//         </pre>
//       </div>
//     </div>
//   );
// };
