import CreateGame from "./components/CreateGame";
import Navbar from "./components/Navbar"
import AboutPage from "./pages/AboutPage";
import GameDetails from "./pages/GameDetails";
import HomePage from "./pages/HomePage"
import { Routes, Route } from "react-router-dom";


function App() {
  

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/create" element={<CreateGame />} />
        <Route path="/games/:gameID" element={<GameDetails />} />
        <Route path="/games/edit/:gameID" element={<EditGame/>} />
      </Routes>
    </>
  )
}

export default App
