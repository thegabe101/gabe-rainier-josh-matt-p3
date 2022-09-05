import React, { Component, useState, useEffect } from "react";
import "../styles/Modal.css";

export default function Modal({ setOpenModal }) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [q, setQ] = useState("");
    const [searchParam] = useState(["username"]);
    const [filterParam, setFilterParam] = useState(["All"]);

    useEffect(() => {
        fetch(
            "http://localhost:3001/api/clients/search/1"
        )
            .then((res) => res.json())
            .then(
                (result) => {
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

                    <ul className="card-grid">
                        {search(data).map((item) => (
                            <li>
                                <article className="rosterBody" key={item.id}>
                                    <div className="rosterBody">
                                        <img className="rosterBox"
                                            src="https://assets.vogue.com/photos/59132f18dc6868483f55b55a/master/w_2560%2Cc_limit/00-lede-the-rock.jpg"
                                            alt={item.username}
                                        />
                                        <div className="card-content">
                                            <h2 className="card-name">{item.username}</h2>
                                            <ol className="card-list">
                                                <li>
                                                    Email:{" "}
                                                    <span>{item.email}</span>
                                                </li>
                                            </ol>
                                        </div>
                                    </div>
                                </article>
                            </li>
                        ))}
                    </ul>

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
}
