import axios from "axios"
import { useEffect, useState } from "react"
import { MainURL } from "../config/api"
import { NavLink, useParams } from "react-router-dom"

function GameList() {
  const [games, setGames] = useState([])
  const {gameID}= useParams()

  useEffect(() => {
    axios
      .get(`${MainURL}/games.json`)
      .then((response) => {
        const gamesObject = response.data || {}

        const gamesArr = Object.keys(gamesObject).map((id) => ({
          id,
          ...gamesObject[id],
        }))

        setGames(gamesArr)
      })
      .catch((err) => {
        console.log("Error loading...", err)
      })
  }, [])

  return (
    <div className="game-list">
      {games.map((game) => (
        <div className="game-card" key={game.id}>
          <h2>{game.name}</h2>

          {game.image && (
            <img
              src={game.image}
              alt={`Imagen de ${game.name}`}
              className="game-image"
            />
          )}

          <p className="game-description">{game.description}</p>
          <p className="game-description">{game.developer}</p>

          <div className="rating">⭐ {game.averageRating}</div>
          <p className="game-description">{game.genres}</p>
          <p className="game-description">{game.platforms}</p>
          <div className="rating">⭐ {game.reviews}</div>

           <button><NavLink to= {`/games/edit/:${gameID}`} className="editlink"> Edit</NavLink></button> 
           <button onClick={onDelete}>Delete</button>
        </div>
      ))}
    </div>
  )
}

export default GameList
