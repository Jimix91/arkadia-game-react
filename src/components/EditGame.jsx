import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MainURL } from "../config/api";
import "../CSS/CreateGame.css";



function EditGame() {

   const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [developer, setDeveloper] = useState("");
  const [platforms, setPlatforms] = useState("");
  const [averageRating, setAverageRating] = useState("");

  const navigate = useNavigate();


  return (
    <>
      <h1>Edit page</h1>
    </>
  )
}

export default EditGame