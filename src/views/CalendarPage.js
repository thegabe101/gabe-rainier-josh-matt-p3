import React, {
	Fragment,
	useState,
	useCallback,
	useMemo,
	useEffect,
} from 'react'
import {
	Calendar,
	Views,
	DateLocalizer,
	dateFnsLocalizer,
} from 'react-big-calendar'
import format from 'date-fns/format'
import getDay from 'date-fns/getDay'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import PropTypes from 'prop-types'
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop'
import '../styles/Calendar.css'
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import events from '../utils/events'
import Popup from '../components/Popup'
import API from '../utils/API'
import axios from 'axios'
import { getDate } from 'date-fns'


const locales = {
	'en-US': require('date-fns/locale/en-US'),
}

const localizer = dateFnsLocalizer({
	format,
	parse,
	startOfWeek,
	getDay,
	locales,
})

export default function Selectable() {
	// GMS this is the onlclick function that sets modal to open
	// onClick={() => {setModalOpen(true);}}

	// GMS this should be placed with the cell target so that it sets the modal state to open on click, which will open calModal
	// {modalOpen && <Modal setOpenModal={setModalOpen} />}

	// GMS modal state for calModal, default closed


	const [coachy, setCoachy] = useState("");
	const [selectedExercise, setSelectedExercise] = useState({
		title: '',
		variations: '',
		reps: 0,
		sets: 0,
		weight: 0,
	})

	const getData = async () => {
		try {
			const value = await localStorage.getItem("isCoach");
			console.log(value);
			if (value !== null) {
				setCoachy(value);
			}
		} catch (e) {
		}
	};


	const [myEvents, setEvents] = useState({ title: '', start: '', end: '' })
	const [allEvents, setAllEvents] = useState([])
	const [Form, setForm] = useState({
		title: '',
		variations: '',
		reps: 0,
		sets: 0,
		weight: 0,
	})
	const [buttonPopup, setButtonPopup] = useState(false)
	const [modalOpen, setModalOpen] = useState(false);
	useEffect(() => {
		getData();
		if (coachy == "true") {
			axios
				.get(
					'http://localhost:3001/'
					// 'https://lifter-backend-build.herokuapp.com/' 
					+ 'api/exercises/search/' +
					localStorage.getItem('id')
				)
				.then((response) => {
					console.log(response.data)
					let dates = response.data
					let seed = []
					for (let i = 0; i < dates.length; i++) {
						let obj = {}
						obj['title'] = dates[i].exerciseName
						obj['start'] = dates[i].dateSelected
						obj['end'] = dates[i].dateSelected
						seed.push(obj)
					}
					console.log(seed)
					setAllEvents(seed)
				})
				.catch((e) => {
					console.log(e)
				})
		} else {
			console.log("logged in as coach")
			axios
				.get(
					'http://localhost:3001/'
					// 'https://lifter-backend-build.herokuapp.com/' 
					+ 'api/exercises/search/' +
					localStorage.getItem('clientId')
				)
				.then((response) => {
					console.log(response.data)
					let dates = response.data
					let seed = []
					for (let i = 0; i < dates.length; i++) {
						let obj = {}
						obj['title'] = dates[i].exerciseName
						obj['start'] = dates[i].dateSelected
						obj['end'] = dates[i].dateSelected
						seed.push(obj)
					}
					console.log(seed)
					setAllEvents(seed)
				})
				.catch((e) => {
					console.log(e)
				})
		}
		console.log(allEvents)
	}, [])



	useEffect(() => {
		console.log(allEvents)
	}, [allEvents])



	const handleSelectSlot = useCallback(
		({ start }) => {
			// Shows Popup
			setEvents({ ...myEvents, start: start, end: start })
			setButtonPopup(true)
		},
		[setEvents]
	)
	function handleFormSubmit(e) {
		e.preventDefault()
		setAllEvents((prev) => [...prev, myEvents])
		setButtonPopup(false)
		console.log(myEvents)
		let clientId = ''
		if (coachy == 'false') {
			clientId = localStorage.getItem('id')
		} else {
			clientId = localStorage.getItem('clientId')
		}

		API.postExercise(
			Form.title,
			Form.sets,
			Form.reps,
			Form.weight,
			myEvents.start,
			clientId
		)
		console.log(Form)
	}
	function handleFormChange(e) {
		setForm({ ...Form, [e.target.name]: e.target.value })
		setEvents({ ...myEvents, title: Form.title })
	}

	const handleSelectEvent = () => {
		console.log("modal open")
		setModalOpen(true);
		if (coachy == 'false') {
			axios.get('http://localhost:3001/' + `api/exercises/${localStorage.getItem('id')}`).then((response) => {
				console.log(response.data)
				const r = response.data
				setSelectedExercise({ title: r.exerciseName, variations: r.variations, reps: r.reps, sets: r.sets, weight: r.weight })
				//All you have to do is show modal here

			})
		} else {
			axios.get('http://localhost:3001/' + `api/exercises/${localStorage.getItem('id')}`).then((response) => {
				console.log(response.data)
				const r = response.data
				setSelectedExercise({ title: r.exerciseName, variations: r.variations, reps: r.reps, sets: r.sets, weight: r.weight })
				//and here
			})
		}
	}
	useEffect(() => {
		console.log(selectedExercise)
		//render all the divs here
	}, [selectedExercise])


	const { defaultDate, scrollToTime } = useMemo(
		() => ({
			defaultDate: new Date(),
			scrollToTime: new Date(1970, 1, 1, 6),
		}),
		[]
	)
	return (
		<Fragment>
			<div className='height600'>
				<Calendar
					defaultDate={defaultDate}
					defaultView={Views.MONTH}
					events={allEvents}
					localizer={localizer}
					style={{ height: 900, width: '95%' }}
					onSelectEvent={handleSelectEvent}
					onSelectSlot={handleSelectSlot}
					selectable
					scrollToTime={scrollToTime}
				/>
			</div>
			<div>
				<Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
					<h3>Assign</h3>
					<p>Enter new Exercise</p>
					<form className='submitExerciseFrom' onSubmit={handleFormSubmit}>
						<input
							type='text'
							placeholder='Title'
							name='title'
							onChange={handleFormChange}
						/>
						<input
							type='text'
							placeholder='Variations'
							name='variations'
							onChange={handleFormChange}
						></input>
						<input
							type='text'
							placeholder='Sets'
							name='sets'
							onChange={handleFormChange}
						></input>
						<input
							type='text'
							placeholder='Reps'
							name='reps'
							onChange={handleFormChange}
						></input>
						<input
							type='text'
							placeholder='Weights'
							name='weight'
							onChange={handleFormChange}
						></input>
						<button>Submit</button>
					</form>

					{/* <input type='text' placeholder='WOOP' />
					<input type='text' placeholder='thats the sound of the police' /> */}
				</Popup>
			</div>
			<div>
				<Popup trigger={modalOpen} setTrigger={setModalOpen}>
					<div>
						<h1>Exercise name:{selectedExercise.title}</h1>
						<h2>Target Reps: {selectedExercise.reps}</h2>
						<h2>Target Sets: {selectedExercise.sets}</h2>
						<h2>Weight: {selectedExercise.weight} Pounds</h2>
					</div>
				</Popup>
			</div>
		</Fragment>
	)
}

Selectable.propTypes = {
	localizer: PropTypes.instanceOf(DateLocalizer),
}
