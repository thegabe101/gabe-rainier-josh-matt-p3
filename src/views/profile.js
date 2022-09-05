import { React, useState, useEffect, useRef } from 'react'
import '../styles/Profile.css'
import API from '../utils/API'
import axios from 'axios'
import { Image } from 'cloudinary-react'

const cloudNameGuy = 'ddkr1ny4l'
const presetName = 'pyqqyzxb'

const URL_PREFIX =
	'http://localhost:3001/' || 'http://lifter-backend-build.herokuapp.com/'

const Profile = () => {

	const [imageSelected, setImageSelected] = useState('')

	const [publicId, setPublicId] = useState(localStorage.getItem('publicId'));

	const [profile, setProfile] = useState({
		firstName: '',
		lastName: '',
		userName: '',
		phoneNumber: '',
		country: '',
		city: '',
		status: '',
		publicId: '',
	})

	useEffect(() => {
		if (localStorage.getItem('isCoach')) {
			axios.get(URL_PREFIX + `api/coaches/${localStorage.getItem('id')}`)
				.then((response) => {
					console.log(response)
					//set responses as profile texts
					const firstName = response.data.firstName
					const lastName = response.data.lastName
					const userName = response.data.userName
					const phoneNumber = response.data.phoneNumber
					const publicId = response.data.publicId
					const country = response.data.country
					const city = response.data.city
					const status = response.data.status
					const profileT = {
						firstName: firstName,
						lastName: lastName,
						userName: userName,
						phoneNumber: phoneNumber,
						country: country,
						city: city,
						status: status,
						publicId: publicId
					}
					localStorage.setItem("publicId", publicId)
					console.log(localStorage.getItem("publicId"))
					setProfile(profileT)
					console.log(profile)
				})
		} else {
			axios.get(URL_PREFIX + `api/clients/${localStorage.getItem('id')}`)
				.then((response) => {
					console.log(response)
					//set responses as profile texts
					const firstName = response.data.firstName
					const lastName = response.data.lastName
					const userName = response.data.userName
					const phoneNumber = response.data.phoneNumber
					const publicId = response.data.publicId
					const country = response.data.country
					const city = response.data.city
					const status = response.data.status
					const profileT = {
						firstName: firstName,
						lastName: lastName,
						userName: userName,
						phoneNumber: phoneNumber,
						country: country,
						city: city,
						status: status,
						publicId: publicId
					}
					localStorage.setItem("publicId", publicId)
					console.log(localStorage.getItem("publicId"))
					setProfile(profileT)
					console.log(profile)
				})
		}
	}, [])

	useEffect(() => {
		console.log(publicId)
		changeImage()
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
			publicId
		)
	}, [publicId])


	function handleFormSubmit(e) {
		e.preventDefault()
		console.log('submitting form')
		uploadImage()
	}

	function handleFormChange(e) {
		setProfile({ ...profile, [e.target.name]: e.target.value })
	}

	const changeImage = () => {
		const imageId = JSON.stringify(publicId)
		console.log(imageId)
		// return imageId
	}

	const uploadImage = async () => {
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
				setPublicId(response.data.public_id)
			})
	}

	return (
		<div className='divBody'>
			<div className='row'>
				<div className='col-md-3 border-right'>
					<div className='d-flex flex-column align-items-center text-center p-3 py-5'>
						<input
							type='file'
							onChange={(event) => {
								setImageSelected(event.target.files[0])
							}}
							alt='Profile'
						/>
						<span className='font-weight-bold'></span>
						<span className='text-black-50'></span>
						<Image
							className='superCoolProfilePicture'
							width='150px'
							cloudName={cloudNameGuy}
							publicId={publicId}
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
