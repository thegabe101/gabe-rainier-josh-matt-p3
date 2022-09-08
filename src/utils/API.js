import axios from 'axios'


const URL_PREFIX = 'http://localhost:3001/' || 'https://lifter-backend-build.herokuapp.com/'
// const URL_PREFIX = 'https://lifter-backend-build.herokuapp.com/'

//COACH API REQ----------------------------------------------------------------
//TODO: Adding a conditional to determine which route to hit.
const API = {
	checkToken: (token) => {
		return fetch(`${URL_PREFIX}api/check-token`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
	},
	loginCoach: (email, password, isCoach) => {
		return fetch(`${URL_PREFIX}api/coaches/login`, {
			method: 'POST',
			body: JSON.stringify({
				email,
				password,
				isCoach,
			}),
			headers: {
				'Content-Type': 'application/json',
			},
		})
	},
	loginClient: (email, password) => {
		return fetch(`${URL_PREFIX}api/clients/login`, {
			method: 'POST',
			body: JSON.stringify({
				email,
				password,
			}),
			headers: {
				'Content-Type': 'application/json',
			},
		})
	},
	getCoaches() {
		axios.get(URL_PREFIX + 'api/coaches').then((response) => {
			console.log(response)
		})
	},
	getOneCoach(id) {
		axios.get(URL_PREFIX + `api/coaches/${id}`).then((response) => {
			console.log(response)
		})
	},
	postCoach(username, email, password) {
		axios
			.post(URL_PREFIX + `api/coaches/`, {
				username: username,
				email: email,
				password: password,
				// coach_code: coach_code,
			})
			.then((response) => {
				console.log(response)
			})
	},
	deleteCoach(id) {
		axios.delete(URL_PREFIX + `api/coaches/${id}`).then((res) => {
			console.log(res)
		})
	},

	putCoaches(
		id,
		firstName,
		lastName,
		userName,
		phoneNumber,
		country,
		city,
		status,
		publicId
	) {
		axios
			.put(URL_PREFIX + `api/coaches/${id}`, {
				firstName: firstName,
				lastName: lastName,
				username: userName,
				phoneNumber: phoneNumber,
				country: country,
				city: city,
				status: status,
				publicId: publicId,
			})
			.then((response) => {
				console.log(response)
			})
	},
	//---------------------------------------------------------------------------
	// CLIENT API REQ------------------------------------------------------------

	getClients() {
		axios.get(URL_PREFIX + 'api/clients').then((response) => {
			console.log(response)
		})
	},
	getOneClients(id) {
		axios.get(URL_PREFIX + `api/clients/${id}`).then((response) => {
			console.log(response)
		})
	},
	postClient(username, email) {
		axios
			.post(URL_PREFIX + `api/clients/`, {
				username: username,
				email: email,
			})
			.then((response) => {
				console.log(response)
			})
	},
	deleteClient(id) {
		axios.delete(URL_PREFIX + `api/clients/${id}`).then((res) => {
			console.log(res)
		})
	},
	putClients(
		id,
		firstName,
		lastName,
		userName,
		phoneNumber,
		country,
		city,
		status,
		publicId
	) {
		axios
			.put(URL_PREFIX + `api/clients/${id}`, {
				firstName: firstName,
				lastName: lastName,
				username: userName,
				phoneNumber: phoneNumber,
				country: country,
				city: city,
				status: status,
				publicId: publicId,
			})
			.then((response) => {
				console.log(response)
			})
	},
	assignClients(username, coach_id) {
		axios
			.put(URL_PREFIX + `api/clients/${username}`, {
				coach_id: coach_id,
			})
			.then((response) => {
				console.log(response)
			})
	},

	//---------------------------------------------------------------------------
	// EXERCISE API REQ----------------------------------------------------------

	getExercise() {
		axios.get(URL_PREFIX + 'api/exercises').then((response) => {
			console.log(response)
		})
	},
	getOneExercise(id) {
		axios.get(URL_PREFIX + `api/exercises/${id}`).then((response) => {
			console.log(response)
		})
	},
	postExercise(exerciseName, sets, reps, weight, date, clientId) {
		axios
			.post(URL_PREFIX + `api/exercises/`, {
				exerciseName: exerciseName,
				sets: sets,
				reps: reps,
				weight: weight,
				dateSelected: date,
				client_id: clientId,
			})
			.then((response) => {
				console.log(response)
			})
	},
	deleteExercise(id) {
		axios.delete(URL_PREFIX + `api/clients/${id}`).then((res) => {
			console.log(res)
		})
	},
	putExercise(id, exerciseName, sets, reps, weight) {
		axios
			.put(URL_PREFIX + `api/clients/${id}`, {
				exerciseName: exerciseName,
				sets: sets,
				reps: reps,
				weight: weight,
			})
			.then((response) => {
				console.log(response)
			})
	},
	// grabProfPic() {
	// 	axios.post("https://api.cloudinary.com/v1_1/ddkr1ny4l/image/upload")
	// }
}
//---------------------------------------------------------------------------
export default API
