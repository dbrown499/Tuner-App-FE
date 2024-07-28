import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"

const API = import.meta.env.VITE_API_URL

const SongNewForm = () => {
    const navigate = useNavigate();
    const [newSong, setNewSong] = useState({
        name: "",
        artist: "",
        album: "",
        time: "",
        is_favorite: false
    })

    const addSong = () => {
        fetch(`${API}/songs`, {
            method: "POST",
            body: JSON.stringify(newSong),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(res => {
                navigate("/songs")
            })
            .catch(err => console.log(err))
    }

    const handleTextChange = (event) => {
        setNewSong({ ...newSong, [event.target.id]: event.target.value })
    }

    const handleCheckboxChange = () => {
        setNewSong({ ...newSong, is_favorite: !newSong.is_favorite })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        addSong()
    }

    return (
        <div className="New">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                    id="name"
                    value={newSong.name}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Song Name "
                    required
                />
                <br />
                <label htmlFor="name">Artist:</label>
                <input
                    id="artist"
                    value={newSong.artist}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Artist Name"
                    required
                />
                <br />
                <label htmlFor="name">Album:</label>
                <input
                    id="album"
                    value={newSong.album}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Album Name"
                    required
                />
                <br />
                <label htmlFor="name">Time:</label>
                <input
                    id="time"
                    value={newSong.time}
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
                    checked={newSong.is_favorite}
                />
                <br />
                <button type="submit">Submit</button>
            </form>
            <br />
            <Link to={"/songs"}>
                <button>Back</button>
            </Link>
        </div>
    )
}

export default SongNewForm