import React, { Fragment, useState, useCallback, useMemo } from 'react'
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
	// DO A GET ROUTE HERE AND SET IT AS EVENTS
	function getDateData() {
		axios
			.get('https://lifter-backend-build.herokuapp.com/' + 'api/exercises')
			.then((response) => {
				for (let i = 0; i < response.data.length; i++) {
					var title = response.data[i].exerciseName
					var formattedDate = response.data[i].dateSelected.slice(0, 10)
					let dateArray = formattedDate.split('-')
					var year = dateArray[0]
					var month = dateArray[1]
					var day = dateArray[2]
					console.log(formattedDate)
				}
			})
	}

	//string.slice(0.10)
	const [myEvents, setEvents] = useState([])
	const [Start, setStart] = useState('')
	const [End, setEnd] = useState('')
	const [Title, setTitle] = useState('')
	const [Form, setForm] = useState({
		title: '',
		variations: '',
		reps: 0,
		sets: 0,
		weight: 0,
	})
	const [buttonPopup, setButtonPopup] = useState(false)

	const handleSelectSlot = useCallback(
		({ start, end }) => {
			// Shows Popup
			setStart(start)
			console.log(Start)
			setEnd(end)
			setButtonPopup(true)
		},
		[setEvents]
	)
	function handleFormSubmit(e) {
		e.preventDefault()
		setEvents((prev) => [...prev, { start: Start, end: End, title: Title }])
		setButtonPopup(false)
		//POST ROUTE HERE POST FORM
		console.log('REal:' + Start)
		API.postExercise(Form.title, Form.sets, Form.reps, Form.weight, Start)
		console.log(Form)
	}
	function handleFormChange(e) {
		setTitle(Form.title)
		setForm({ ...Form, [e.target.name]: e.target.value })
	}
	const handleSelectEvent = useCallback(
		//PUT Route is final
		//GET route
		(event) => window.alert(event.title),
		[]
	)

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
					events={myEvents}
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
					<h3>Popup</h3>
					<p>THIS POPUP IS TRIGGERED BY THING</p>
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
		</Fragment>
	)
}

Selectable.propTypes = {
	localizer: PropTypes.instanceOf(DateLocalizer),
}

// class CalendarPage extends Component {
// 	state = {
// 		events: [
// 			{
// 				start: moment().toDate(),
// 				end: moment().add(1, 'days').toDate(),
// 				title: 'Some title',
// 			},
// 		],
// 	}

// 	onEventResize = (data) => {
// 		const { start, end } = data

// 		this.setState((state) => {
// 			state.events[0].start = start
// 			state.events[0].end = end
// 			return { events: [...state.events] }
// 		})
// 	}

// 	onEventDrop = (data) => {
// 		const { start, end } = data

// 		this.setState((state) => {
// 			state.events[0].start = start
// 			state.events[0].end = end
// 			return { events: [...state.events] }
// 		})
// 		console.log(data)
// 	}

// 	render() {
// 		return (
// 			<div className='App'>
// 				<DnDCalendar
// 					defaultDate={moment().toDate()}
// 					defaultView='month'
// 					events={this.state.events}
// 					localizer={localizer}
// 					onEventDrop={this.onEventDrop}
// 					onEventResize={this.onEventResize}
// 					resizable
// 					style={{ height: '100vh' }}
// 				/>
// 			</div>
// 		)
// 	}
// }

// export default CalendarPage
