import axios from "axios"
import { useEffect, useState } from "react"
import { MainURL } from "../config/api"
import { NavLink } from "react-router-dom"
import "../CSS/HomePage.css"

function GameList() {
  const [games, setGames] = useState([])


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

          <div className="rating">⭐ {game.averageRating}</div>

           <NavLink to= {`/games/${game.id}`} className="detailslink"> Detalles</NavLink> 
        </div>
      ))}
    </div>
  )
}

export default GameList
