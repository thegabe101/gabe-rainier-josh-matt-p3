import React from 'react'
import '../styles/Profile.css'
import axios from 'axios';

const Profile = () => {

	const URL_PREFIX = "http://localhost:3001";
	return (
		<div className='divBody'>
			<div className='row'>
				{/* this is the profile pic */}
				<div className='col-md-3 border-right'>
					<div className='d-flex flex-column align-items-center text-center p-3 py-5'>
						<img

							alt='Profile'
							className='rounded-circle mt-5'
							width='150px'
						/>
						<span className='font-weight-bold'></span>
						<span className='text-black-50'></span>
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

								/>
							</div>
							<div className='col-md-6'>
								<label className='labels'>Surname</label>
								<input
									type='text'
									className='form-control'
									placeholder='Surname'

								/>
							</div>
							<div className='row mt-3'>
								<div className='col-md-12'>
									<label className='labels'>Email</label>
									<input
										type='text'
										className='form-control'
										placeholder='Email'

									/>
								</div>
								<div className='col-md-12'>
									<label className='labels'>Phone</label>
									<input
										type='text'
										className='form-control'
										placeholder='Enter Phone Number'

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

									/>
								</div>
								<div className='col-md-12'>
									<label className='labels'>State/Region</label>
									<input
										type='text'
										className='form-control'
										placeholder='State'

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


