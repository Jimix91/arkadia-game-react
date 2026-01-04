import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MainURL } from "../config/api";
import "../CSS/EditGame.css";

function EditGame() {
  const { gameID } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [developer, setDeveloper] = useState("");
  const [platforms, setPlatforms] = useState("");
  const [averageRating, setAverageRating] = useState("");

  // Cargar datos actuales del juego
  useEffect(() => {
    axios
      .get(`${MainURL}/games/${gameID}.json`)
      .then((response) => {
        const game = response.data;
        setName(game.name || "");
        setImage(game.image || "");
        setDescription(game.description || "");
        setDeveloper(game.developer || "");
        setPlatforms(game.platforms || "");
        setAverageRating(game.averageRating || "");
      })
      .catch((err) => console.error(err));
  }, [gameID]);

  // Guardar cambios (PATCH)
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .patch(`${MainURL}/games/${gameID}.json`, {
        name,
        image,
        description,
        developer,
        platforms,
        averageRating,
      })
      .then(() => {
        navigate(`/games/${gameID}`);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="edit-game">
      <h1 className="edit-game-title">Edit Game</h1>

      <form className="edit-game-form" onSubmit={handleSubmit}>
        <label className="edit-form-label">Name</label>
        <input
          className="edit-form-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Game name"
        />

        <label className="edit-form-label">Image URL</label>
        <input
          className="edit-form-input"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="Image URL"
        />

        <label className="edit-form-label">Description</label>
        <textarea
          className="edit-form-input"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />

        <label className="edit-form-label">Developer</label>
        <input
          className="edit-form-input"
          value={developer}
          onChange={(e) => setDeveloper(e.target.value)}
          placeholder="Developer"
        />

        <label className="edit-form-label">Platforms</label>
        <input
          className="edit-form-input"
          value={platforms}
          onChange={(e) => setPlatforms(e.target.value)}
          placeholder="Platforms"
        />

        <label className="edit-form-label">Rating</label>
        <input
          className="edit-form-input"
          type="number"
          min="0"
          max="5"
          step="0.1"
          value={averageRating}
          onChange={(e) => setAverageRating(e.target.value)}
        />

        <div className="edit-game-actions">
          <button className="edit-form-button" type="submit">
            💾 Save changes
          </button>

          <button
            className="edit-form-button cancel"
            type="button"
            onClick={() => navigate(-1)}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditGame;
