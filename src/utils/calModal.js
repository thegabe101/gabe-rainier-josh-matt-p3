// import React, { Component, useState, useEffect } from "react";
// import "../styles/Modal.css";

// export default function calModal({ setOpenModal }) {

//     const [error, setError] = useState(null);
//     const [isLoaded, setIsLoaded] = useState(false);
//     const [items, setItems] = useState([]);
//     const [variations, setVariations] = useState("");
//     const [sets, setSets] = useState("");
//     const [reps, setReps] = useState("");
//     const [weights, setWeights] = useState("");

//     useEffect(() => {
//         fetch(
//             //GMS on this line
//         )
//             .then((res) => res.json())
//             .then(
//                 (result) => {
//                     setIsLoaded(true);
//                     setItems(result);
//                 },
//                 (error) => {
//                     setIsLoaded(true);
//                     setError(error);
//                 }
//             );
//     }, []);

//     const data = Object.values(items);
//     console.log(Object.values(items));

//     if (error) {
//         return (
//             <p>
//                 {error.message}
//             </p>
//         );
//     } else if (!isLoaded) {
//         return <>loading...</>;
//     } else {

//         return (
//             <div className="modalBackground">
//                 <div className="modalContainer">
//                 </div>
//                 <div className="footer">
//                     <button
//                         onClick={() => {
//                             setOpenModal(false);
//                         }}
//                         id="cancelBtn"
//                     >
//                         Close
//                     </button>
//                 </div>
//             </div>
//         );
//     }
// }