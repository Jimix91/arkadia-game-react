import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MainURL } from "../config/api";
import "../CSS/CreateGame.css";

function CreateGame() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [developer, setDeveloper] = useState("");
  const [platforms, setPlatforms] = useState("");
  const [averageRating, setAverageRating] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newGame = {
      name,
      image,
      description,
      developer,
      platforms,
      averageRating,
    };

    axios
      .post(`${MainURL}/games.json`, newGame)
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.log("Error adding game", err);
      });
  };

  return (
    <div className="create-game">
      <h1 className="create-game-title">Añade un Juego</h1>

      <form className="create-game-form" onSubmit={handleSubmit}>
        <label className="form-label">Título</label>
        <input
          className="form-input"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. Super Mario"
          required
        />

        <label className="form-label">Imagen</label>
        <input
          className="form-input"
          type="url"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="https://..."
        />

        <label className="form-label">Descripción</label>
        <input
          className="form-input"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <label className="form-label">Desarrollador</label>
        <input
          className="form-input"
          type="text"
          value={developer}
          onChange={(e) => setDeveloper(e.target.value)}
          placeholder="e.g. Rockstar Games"
        />

        <label className="form-label">Plataformas</label>
        <input
          className="form-input"
          type="text"
          value={platforms}
          onChange={(e) => setPlatforms(e.target.value)}
          placeholder="PC, PS5, Xbox..."
        />

        <label className="form-label">Puntuación</label>
        <input
          className="form-input"
          type="number"
          min="0"
          max="10"
          value={averageRating}
          onChange={(e) => setAverageRating(e.target.value)}
        />

        <button className="form-button" type="submit">
          Guardar Juego
        </button>
      </form>
    </div>
  );
}

export default CreateGame;
