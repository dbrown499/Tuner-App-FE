import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom"

const API = import.meta.env.VITE_API_URL;

const SongEditForm = () => {
    let { id } = useParams()
    const navigate = useNavigate()

    const [editSong, setEditSong] = useState({
        // name: "",
        // artist: "",
        // album: "",
        // time: "",
        // is_favorite: false
    })

    useEffect(() => {
        fetch(`${API}/songs/${id}`)
            .then(res => res.json())
            .then(res => {
                setEditSong(res)
            })
            .catch(err => console.log(err))
    }, [])

    const handleTextChange = (event) => {
        setEditSong({ ...editSong, [event.target.id]: event.target.value })
    }

    const handleCheckboxChange = () => {
        setEditSong({ ...editSong, is_favorite: !editSong.is_favorite })
    }

    const updateSong = () => {
        fetch(`${API}/songs/${id}`, {
            method: "PUT",
            body: JSON.stringify(editSong),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(res => {
                navigate(`/songs/${id}`)
            })
            .catch(err => console.log(err))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        updateSong()
    };

    return (
        <div className="Edit">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                    id="name"
                    value={editSong.name}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Song Name "
                    required
                />
                <br />
                <label htmlFor="name">Artist:</label>
                <input
                    id="artist"
                    value={editSong.artist}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Artist Name"
                    required
                />
                <br />
                <label htmlFor="name">Album:</label>
                <input
                    id="album"
                    value={editSong.album}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Album Name"
                    required
                />
                <br />
                <label htmlFor="name">Time:</label>
                <input
                    id="time"
                    value={editSong.time}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Duration"
                    required
                />
                <br />
                <label htmlFor="isFavorite">Favorite</label>
                <input
                    id="isFavorite"
                    type="checkbox"
                    onChange={handleCheckboxChange}
                    checked={editSong.is_favorite}
                />
                <br />
                <button type="submit">Submit</button>
            </form>
            <br />
            <Link to={`/songs/${id}`}>
                <button>Back</button>
            </Link>
        </div>
    )
}

export default SongEditForm