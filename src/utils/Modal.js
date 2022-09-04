import React from "react";
import "../styles/Modal.css";

function Modal({ setOpenModal }) {
    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <label htmlFor="search-form">
                    <input
                        type="search"
                        name="search-form"
                        id="search-form"
                        className="search-input"
                        placeholder="Search for lifters..."
                    // value={q}
                    // onChange={(e) => setQ(e.target.value)}
                    />
                </label>
                <div className="footer">
                    <button
                        onClick={() => {
                            setOpenModal(false);
                        }}
                        id="cancelBtn"
                    >
                        Cancel
                    </button>
                    <button>Add liftr</button>
                </div>
            </div>
        </div>
    );
}

export default Modal