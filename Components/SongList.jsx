import React from 'react'
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'

const API = import.meta.env.VITE_API_URL;

const SongList = () => {
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        fetch(`${API}/songs`)
            .then(res => res.json())
            .then(res => setSongs(res))
            .catch(err => console.log(err))
    }, [])

    return (
        <section>{songs.map(song => {
            return (
                <ul key={song.id}>
                    <Link to={`/songs/${song.id}`}>
                        <li>{song.name} by {song.artist}</li>
                    </Link>
                </ul>
            )
        })}
            <Link to="/songs/new">
                <button>Add A Song</button>
            </Link>
        </section>
    )
}

export default SongList