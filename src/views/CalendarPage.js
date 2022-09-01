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
	const [myEvents, setEvents] = useState([])

	const handleSelectSlot = useCallback(
		({ start, end }) => {
			//POST route here
			const title = window.prompt('New Event name')
			if (title) {
				setEvents((prev) => [...prev, { start, end, title }])
			}
		},
		[setEvents]
	)

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
	const [buttonPopup, setButtonPopup] = useState(false)
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
				<button onClick={() => setButtonPopup(true)}>OpenPopup</button>
			</div>
			<div>
				<Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
					<h3>Popup</h3>
					<p>THIS POPUP IS TRIGGERED BY THING</p>
					<input type='text' placeholder='WOOP' />
					<input type='text' placeholder='WOOP' />
					<input type='text' placeholder='thats the sound of the police' />
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
