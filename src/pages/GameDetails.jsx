import axios from "axios";
import { useEffect, useState } from "react";
import { MainURL } from "../config/api";
import { useParams, NavLink } from "react-router-dom";
import "../CSS/GameDetails.css"

function GameDetails() {
  const { gameID } = useParams(); 
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!gameID) return;

    axios
      .get(`${MainURL}/games/${gameID}.json`)
      .then((response) => {
        setGame(response.data);
      })
      .catch((err) => {
        console.log("Error loading...", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [gameID]);

  if (loading) return <p>Cargando...</p>;
  if (!game) return <p>Juego no encontrado</p>;

  return (
    <div className="game-card">
      <h2>{game.name}</h2>
      {game.image && <img src={game.image} alt={game.name} />}
      <p>{game.description}</p>
      <p>Developer: {game.developer}</p>
      <p>Genres: {game.genres}</p>
      <p>Platforms: {game.platforms}</p>
      <p>⭐ {game.averageRating}</p>

      <NavLink to={`/games/${gameID}/edit`}>
        <button>Edit</button>
      </NavLink>
      <button>DeleteGame</button>
    </div>
  );
}

export default GameDetails;

