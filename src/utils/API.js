import axios from 'axios'

const URL_PREFIX = 'http://127.0.0.1:3001/'
//COACH API REQ----------------------------------------------------------------

const API = {
	getCoaches() {
		axios.get(URL_PREFIX + 'api/coaches').then((response) => {
			console.log(response)
		})
	},
	getOneCoach(username) {
		axios.get(URL_PREFIX + `api/coaches/${username}`).then((response) => {
			console.log(response)
		})
	},
	postCoach(username, email, password) {
		axios
			.post(URL_PREFIX + `api/coaches/`, {
				username: username,
				email: email,
				password: password
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
	putCoaches(id, username, email, coach_code) {
		axios
			.put(URL_PREFIX + `api/coaches/${id}`, {
				username: username,
				email: email,
				coach_code: coach_code,
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
	putClients(id, username, email) {
		axios
			.put(URL_PREFIX + `api/clients/${id}`, {
				username: username,
				email: email,
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
	postExercise(exerciseName, sets, reps, weight) {
		axios
			.post(URL_PREFIX + `api/exercises/`, {
				exerciseName: exerciseName,
				sets: sets,
				reps: reps,
				weight: weight,
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
	}
}
//---------------------------------------------------------------------------
