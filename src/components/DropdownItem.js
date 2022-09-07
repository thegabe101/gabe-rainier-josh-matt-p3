import React from 'react';



function DropdownItem({ exerciseType, handleOnClick }) {
    return (
        <li className="dd-list-item">
            <button type="button" onClick={() => handleOnClick(exerciseType)}>
                <span>{exerciseType}</span>
                {/* <span>{isExerciseInSelection(exercise) && 'Selected'}</span> */}
            </button>
        </li>
    )
}

export default DropdownItem;