import React, { useState } from 'react';
import onClickOutside from 'react-onclickoutside';
import '../styles/Dropdown.css';
import getExerciseData from '../data/exerciseData';
import DropdownItem from './DropdownItem';
import { FaDoorOpen } from 'react-icons/fa';
import { FaDoorClosed } from 'react-icons/fa';

const exerciseTypes = ['Compound', 'Upper Body', 'Chest', 'Arms', 'Back', 'Legs', 'Core',]

function Dropdown({ title, exercises, multiSelect = false }) {
    const [open, setOpen] = useState(true);
    const [selection, setSelection] = useState(exerciseTypes);
    const toggle = () => setOpen(!open);
    Dropdown.handleClickOutside = () => setOpen(false);

    function handleOnClick(exerciseType) {
        setSelection(exerciseType);
        localStorage.setItem('Type', exerciseType);
        window.location.reload()
        console.log(exerciseType);
    }


    // function isExerciseInSelection(exercise) {
    //     if (selection.some(current => current.id === exercise.id)) {
    //         return true;
    //     }
    //     return false;
    // }

    const listItems = exerciseTypes.map(exerciseType => {
        return (
            <DropdownItem exerciseType={exerciseType} handleOnClick={handleOnClick} />
        )
    })

    const selectedExercises = exercises.filter(exercise => {
        return exercise.type === selection;
    })

    // console.log(selectedExercises);

    return (
        <div className="dd-wrapper">
            <div
                tabIndex={0}
                className="dd-header"
                role="button"
                onKeyPress={() => toggle(!open)}
                onClick={() => toggle(!open)}
            >
                <div className="dd-header__action">
                    <p>{open ? <FaDoorOpen size='3.5em' /> : <FaDoorClosed size="3.5em" />}</p>
                </div>
            </div>
            {open && (
                <ul className="dd-list">
                    {listItems}
                </ul>
            )}
        </div>
    );
}

const clickOutsideConfig = {
    handleClickOutside: () => Dropdown.handleClickOutside,
};

export default onClickOutside(Dropdown, clickOutsideConfig);