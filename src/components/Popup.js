import React from 'react'
import '../styles/Popup.css'
import "../styles/Modal.css"

const Popup = (props) => {
	return props.trigger ? (
		<div className='popup'>
			<div className='popup-inner'>
				<button
					id='cancelBtn'
					onClick={() => props.setTrigger(false)}
				></button>
				{props.children}
			</div>
		</div>
	) : (
		''
	)
}

export default Popup
