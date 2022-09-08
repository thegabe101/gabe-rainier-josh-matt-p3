import { React, useState, useEffect, useRef } from 'react'
import '../styles/Profile.css'
import API from '../utils/API'
import axios from 'axios'
import { Image } from 'cloudinary-react'
import { get } from 'react-hook-form'

const cloudNameGuy = 'ddkr1ny4l'
const presetName = 'pyqqyzxb'

const URL_PREFIX = "http://localhost:3001/" || "https://lifter-backend-build.herokuapp.com/";
// const URL_PREFIX = 'https://lifter-backend-build.herokuapp.com/'


const Profile = () => {

	// const [imageSelected, setImageSelected] = useState(localStorage.getItem('publicId'))
	const [imageSelected, setImageSelected] = useState("");

	const [publicId, setPublicId] = useState((localStorage.getItem("coachId")));

	const [profile, setProfile] = useState({
		firstName: '',
		lastName: '',
		userName: '',
		phoneNumber: '',
		country: '',
		city: '',
		status: '',
		public_id: '',
	})

	useEffect(() => {
		console.log(publicId)
		console.log('use effect is on')
		// getData();
		const isACoach = localStorage.getItem("isCoach")
		console.log(isACoach);
		if (isACoach == "true") {
			console.log('we is a coach')
			axios.get(URL_PREFIX + `api/coaches/${localStorage.getItem('id')}`)
				.then((response) => {
					console.log(response)
					console.log(response.data.publicId)
					setPublicId(response.data.publicId)
					setImageSelected(localStorage.getItem("publicId"))
					const profileT = {
						firstName: response.data.firstName,
						lastName: response.data.lastName,
						userName: response.data.username,
						phoneNumber: response.data.phoneNumber,
						country: response.data.country,
						city: response.data.city,
						status: response.data.status,
						publicId: response.data.publicId
					}
					// localStorage.setItem("publicId", publicId)
					// console.log(localStorage.getItem(publicId))
					console.log(profileT)
					setProfile(profileT)
				})
		} else {
			console.log('we is a client')
			axios.get(URL_PREFIX + `api/clients/${localStorage.getItem('id')}`)
				.then((response) => {
					setPublicId(response.data.publicId)
					console.log(response.data.username)
					setImageSelected(localStorage.getItem("publicId"))
					const profileT = {
						firstName: response.data.firstName,
						lastName: response.data.lastName,
						userName: response.data.username,
						phoneNumber: response.data.phoneNumber,
						country: response.data.country,
						city: response.data.city,
						status: response.data.status,
						publicId: response.data.publicId
					}
					// localStorage.setItem("publicId", publicId)
					// console.log(localStorage.getItem("publicId"))
					setProfile(profileT)
				})
		}
	}, [])


	function handleFormSubmit(e) {
		e.preventDefault()
		console.log('submitting form')
		uploadImage()
		// getData();
		console.log(profile.public_id)
		const isACoach = localStorage.getItem("isCoach")
		if (isACoach == "true") {
			console.log("performing coach update")
			API.putCoaches(
				//add profile image
				localStorage.getItem('id'),
				profile.firstName,
				profile.lastName,
				profile.userName,
				profile.phoneNumber,
				profile.country,
				profile.city,
				profile.status,
				// profile.public_id
				localStorage.getItem('publicId')
			)
		} else {
			console.log("performing client update")
			API.putClients(
				//add profile image
				localStorage.getItem('id'),
				profile.firstName,
				profile.lastName,
				profile.userName,
				profile.phoneNumber,
				profile.country,
				profile.city,
				profile.status,
				// profile.public_id
				localStorage.getItem('publicId')
			)
		}
		// console.log('got here')
		// window.location.reload()
	}

	function handleFormChange(e) {
		setProfile({ ...profile, [e.target.name]: e.target.value })
	}

	async function uploadImage() {
		// console.log(files[0]);
		const formData = new FormData()
		formData.append('file', imageSelected)
		formData.append('upload_preset', presetName)
		axios
			.post(
				`https://api.cloudinary.com/v1_1/${cloudNameGuy}/image/upload`,
				formData
			)
			.then((response) => {
				localStorage.setItem("publicId", response.data.public_id)
				console.log(response)
				console.log(response.data.public_id)
				setProfile({ ...profile, public_id: response.data.public_id })
			})
	}

	return (
		<div className='divBody'>
			<div className='row'>
				<div className='col-md-3 border-right'>
					<div className='d-flex flex-column align-items-center text-center p-3 py-5'>
						<span className='font-weight-bold profilePic'>Upload a Profile Picture</span>
						<input
							type='file'
							onChange={(event) => {
								setImageSelected(event.target.files[0])
							}}
							alt='Profile'
						/>
						<span className='text-black-50'></span>
						<Image
							cloudName={cloudNameGuy}
							publicId={publicId}
							width='150px'
							className='superCoolProfilePictureProf'
						/>
					</div>
				</div>

				{/* Settings */}
				<div className='col-md-5 border-right'>
					<div className='p-3 py-5'>
						<div className='d-flex justify-content-between align-items-center mb-3'>
							<h4 className='text-right'>liftr Profile</h4>
						</div>
						<div className='row mt-2'>
							<div className='col-md-6'>
								<label className='labels'>First Name</label>
								<input
									name='firstName'
									type='text'
									className='form-control'
									placeholder='First Name'
									onChange={handleFormChange}
									value={profile.firstName}
								/>
							</div>
							<div className='col-md-6'>
								<label className='labels'>Last Name</label>
								<input
									name='lastName'
									type='text'
									className='form-control'
									placeholder='Surname'
									onChange={handleFormChange}
									value={profile.lastName}
								/>
							</div>
							<div className='row mt-3'>
								<div className='col-md-12'>
									<label className='labels'>Username</label>
									<input
										name='userName'
										type='text'
										className='form-control'
										placeholder='Username'
										onChange={handleFormChange}
										value={profile.userName}
									/>
								</div>
								<div className='col-md-12'>
									<label className='labels'>Phone Number</label>
									<input
										name='phoneNumber'
										type='text'
										className='form-control'
										placeholder='Enter Phone Number'
										onChange={handleFormChange}
										value={profile.phoneNumber}
									/>
								</div>
							</div>
							<div className='row mt-3'>
								<div className='col-md-12'>
									<label className='labels'>Country</label>
									<input
										name='country'
										type='text'
										className='form-control'
										placeholder='Country'
										onChange={handleFormChange}
										value={profile.country}
									/>
								</div>
								<div className='col-md-12'>
									<label className='labels'>City</label>
									<input
										name='city'
										type='text'
										className='form-control'
										placeholder='State'
										onChange={handleFormChange}
										value={profile.city}
									/>
								</div>
								<div className='mt-5 text-center'>
									<button
										className='btn btn-primary profile-button'
										type='button'
										onClick={handleFormSubmit}
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
								name='status'
								type='text'
								className='form-control'
								placeholder='Status'
								onChange={handleFormChange}
								value={profile.status}
							/>
						</div>
						<br />
					</div>
				</div>
				{/* </form> */}
			</div>
		</div>
	)
}

export default Profile
