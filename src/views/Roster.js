import React, { Component, useState, useEffect } from "react";
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import '../styles/Roster.css'

export default function App() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [q, setQ] = useState("");
    const [searchParam] = useState(["username"]);
    const [filterParam, setFilterParam] = useState(["All"]);

    useEffect(() => {
        fetch(
            "http://localhost:3001/api/clients"
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
                            placeholder="Search for..."
                            value={q}
                            onChange={(e) => setQ(e.target.value)}
                        />
                        <span className="sr-only">Search for lifter here</span>
                    </label>


                </div>
                <ul className="card-grid">
                    {search(data).map((item) => (
                        <li>
                            <article className="card" key={item.id}>
                                <div className="card-image">
                                    <img
                                        src="https://cdn1.vectorstock.com/i/thumb-large/15/40/blank-profile-picture-image-holder-with-a-crown-vector-42411540.jpg"
                                        alt={item.username}
                                    />
                                </div>
                                <div className="card-content">
                                    <h2 className="card-name">{item.username}</h2>
                                    <ol className="card-list">
                                        <li>
                                            Email:{" "}
                                            <span>{item.email}</span>
                                        </li>
                                    </ol>
                                </div>
                            </article>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}


/*

export default function App() {
        const [error, setError] = useState(null);
        const [isLoaded, setIsLoaded] = useState(false);
        const [items, setItems] = useState([]);

        useEffect(() => {
            fetch("http://localhost:3001/api/clients")
                .then((res) => res.json())
                .then(
                    (result) => {
                        setIsLoaded(true);
                        setItems(result);
                    },
                    // Note: it's important to handle errors here
                    // instead of a catch() block so that we don't swallow
                    // exceptions from actual bugs in components.
                    (error) => {
                        setIsLoaded(true);
                        setError(error);
                    }
                );
        }, []);

        if (error) {
            return <>{error.message}</>;
        } else if (!isLoaded) {
            return <>loading...</>;
        } else {
            return (
                /* here we map over the element and display each item as a card  */ 
				
				/*
                <div className="wrapper">
                    <ul className="card-grid">
                        {items.map((item) => (
                            <li>
                                <article className="card" key={item.id}>
                                    <div className="card-image">
                                        <img src="https://cdn1.vectorstock.com/i/thumb-large/15/40/blank-profile-picture-image-holder-with-a-crown-vector-42411540.jpg" alt={item.username} />
                                    </div>
                                    <div className="card-content">
                                        <h2 className="card-name">{item.username}</h2>
                                        <ol className="card-list">
                                            <li>
                                                Email:{" "}
                                                <span>{item.email}</span>
                                            </li>
                                        </ol>
                                    </div>
                                </article>
                            </li>
                        ))}
                    </ul>
                </div>
            );
        }
    }


/*
const Roster = () => {
	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardMedia
				component='img'
				alt='green iguana'
				height='140'
				width='100'
				image='https://monstar-lab.com/global/wp-content/uploads/sites/11/2019/04/male-placeholder-image.jpeg'
			/>
			<CardContent>
				<Typography gutterBottom variant='h5' component='div'>
					Lizard
				</Typography>
				<Typography variant='body2' color='text.secondary'>
					Lizards are a widespread group of squamate reptiles, with over 6,000
					species, ranging across all continents except Antarctica
				</Typography>
			</CardContent>
			<CardActions>
			</CardActions>
		</Card>
	)
}

*/
