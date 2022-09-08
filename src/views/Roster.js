import React, { Component, useState, useEffect } from "react";
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import '../styles/Roster.css'
import axios from "axios";
import { IoPersonRemove } from 'react-icons/io5'
import { IoCalendar } from 'react-icons/io5'
import Modal from "../utils/Modal";
import { Image } from 'cloudinary-react'
import { Redirect } from "react-router-dom";



export default function Roster() {

    const [publicId, setPublicId] = useState("");

    const cloudNameGuy = 'ddkr1ny4l'

    const presetName = 'pyqqyzxb'

    const URL_PREFIX = "http://localhost:3001/" || "https://lifter-backend-build.herokuapp.com/";


    // const URL_PREFIX = "https://lifter-backend-build.herokuapp.com/";


    const [modalOpen, setModalOpen] = useState(false);

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [q, setQ] = useState("");
    const [searchParam] = useState(["username"]);
    const [filterParam, setFilterParam] = useState(["All"]);

    useEffect(() => {
        fetch(
            //GMS first url is just if you want to populate the roster with all clients in the database
            //GMS seconds URL should populate roster primary with only those belonging to coachid, which will by default be liftrbot 

            `http://localhost:3001/api/clients/search/${localStorage.getItem("id")}`
            // `https://lifter-backend-build.herokuapp.com/api/clients/search/${localStorage.getItem("id")}`

        )
            .then((res) => res.json())
            .then(
                (result) => {
                    console.log(result)
                    setIsLoaded(true);
                    setItems(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            );
    }, []);

    const data = Object.values(items);
    console.log(Object.values(items));
    console.log(data)
    console.log(Object)


    function handleToCalendar(e) {
        e.preventDefault()
        localStorage.setItem('clientId', e.target.id)
        window.location = "/calendar";
        //Redirect to calendar
    }

    function handleSelectedClientDelete(e) {
        e.preventDefault()
        const username = e.target.id
        console.log(username)
        console.log('selected a Client')
        axios.put(URL_PREFIX + `api/clients/roster/${username}`, {
            coach_id: 1
        }).then((res) => {
            console.log(res)
            window.location.reload()
        })
    }


    function search(items) {
        return items.filter((item) => {
            if (item.username == filterParam) {
                return searchParam.some((newItem) => {
                    return (
                        item[newItem]
                            .toString()
                            .toLowerCase()
                            .indexOf(q.toLowerCase()) > -1
                    );
                });
            } else if (filterParam == "All") {
                return searchParam.some((newItem) => {
                    return (
                        item[newItem]
                            .toString()
                            .toLowerCase()
                            .indexOf(q.toLowerCase()) > -1
                    );
                });
            }
        });
    }

    if (error) {
        return (
            <p>
                {error.message}
            </p>
        );
    } else if (!isLoaded) {
        return <>loading...</>;
    } else {
        return (

            <div className="wrapper">
                <div className="search-wrapper">
                    <label htmlFor="search-form">
                        <input
                            type="search"
                            name="search-form"
                            id="search-form"
                            className="search-input"
                            placeholder="Search my roster..."
                            value={q}
                            onChange={(e) => setQ(e.target.value)}
                        />
                        <span className="sr-only">Search for lifter here</span>
                    </label>
                    <button onClick={() => {
                        setModalOpen(true);
                    }} className="addClientButton" role="button">Add to my roster</button>
                    {modalOpen && <Modal setOpenModal={setModalOpen} />}
                </div>
                <ul className="card-grid">
                    {search(data).map((item) => (
                        <li>
                            <article className="rosterBody" key={item.id}>
                                <div className="rosterBody">
                                    <Image
                                        cloudName={cloudNameGuy}
                                        publicId={item.publicId}
                                        width='150px'
                                        className='superCoolProfilePicture'
                                    />
                                    {/* <img className="rosterBox"
                                        src={"https://assets.vogue.com/photos/59132f18dc6868483f55b55a/master/w_2560%2Cc_limit/00-lede-the-rock.jpg"}
                                        alt={item.username}
                                    /> */}
                                    <div className="card-content">
                                        <h2 className="card-name">{item.username}</h2>
                                        <ol className="card-list">
                                            <li>
                                                Email:{" "}
                                                <span>{item.email}</span>
                                                <button id={item.id} onClick={handleToCalendar}><IoCalendar />Schedule</button>
                                                <button id={item.username} onClick={handleSelectedClientDelete}><IoPersonRemove /> Remove</button>
                                            </li>
                                        </ol>
                                    </div>
                                </div>
                            </article>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}


//WHEN clients card button is pressed
//SET local storage client id to the clients id that you selected 




