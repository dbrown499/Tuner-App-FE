import { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from "react-router-dom"

const API = import.meta.env.VITE_API_URL

const SongDetails = () => {
    const [song, setSong] = useState({})
    let { id } = useParams()
    let navigate = useNavigate();


    useEffect(() => {
        fetch(`${API}/songs/${id}`)
            .then(res => res.json())
            .then(res => {
                console.log(res)
                setSong(res)
            })
            .catch(err => console.log(err))
    }, [id])

    const handleDelete = () => {
        fetch(`${API}/songs/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(res => navigate('/songs'))
            .catch(err => console.log(err))
    }

    return (
        <main>
            <div>{song.name} by {song.artist}</div>
            <div>Album Name: {song.album}</div>
            <div>Listening Time: {song.time}</div>
            <div>
                {song.is_favorite ? <span>Favorited❤️</span> : null}
            </div>
            <Link to={`/songs/${song.id}/edit`}>
                <button>Edit</button>
            </Link>
            <button onClick={handleDelete}>Delete</button>
        </main>

    )
}

export default SongDetails