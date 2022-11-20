import './App.css';
import { React, useState, useEffect } from 'react';
import axios from 'axios';
import "nes.css/css/nes.min.css";
import { GameOnDisplay } from './components/GameOnDisplay';
import { GameOffDisplay } from './components/GameOffDisplay'
import { SidePanel } from './components/SidePanel';


const baseUrl = 'https://tlkuno.pythonanywhere.com'

function App() {
  
  const [input, setInput] = useState("")
  const [gameName, setGameName] = useState("")
  const [gameState, setGameState] = useState({
    command: "",
    gameId: null,
    userIp: null,
    history: [],
    input: "",
    isPlaying: false,
    location: "",
    offMsg: "",
    output: "",
  })

  useEffect(() => {
    const startURL = baseUrl + '/start'
    getIP()
    axios.post(startURL, { params: { userIp: gameState.userIp } })
      .then(function (response) {
        const updatedItems = {}
        updatedItems["offMsg"] = response.data.output
        setGameState(gameState => ({
          ...gameState,
          ...updatedItems
        }))
      })}, []);


  const getIP = async () => {
    const res = await axios.get('https://geolocation-db.com/json/')
    const updatedItems = {
      "userIp": res.data.IPv4,
    }
    setGameState(gameState => ({
      ...gameState,
      ...updatedItems
    }))
  }

  useEffect(() => {
    const newHistory = gameState.history.slice()
    // display a command if there was one
    if (gameState.command !== "") {
      newHistory.push({ 'type': 'user', 'content': gameState.command})
      document.getElementById('main_input').value = '';
    }
    // display the output if there was output
    if (gameState.output !== "") {
      newHistory.push({ 'type': 'bot', 'content': gameState.output })
    }
    // update history
    const updatedItems = {
      "history": newHistory,
      "command": "",
      "output": "",
    }
    setGameState(gameState => ({
      ...gameState,
      ...updatedItems
    }))
    setInput("")
  }, [gameState.output])

  function newGame(e) {
    e.preventDefault()
    const newURL = baseUrl + '/new'
    axios.get(newURL, { params: { key: gameName, ip: gameState.userIp } })
      .then(function (response) {
        const updatedItems = {
          "gameId": gameName,
          "isPlaying": true,
          "history": [],
          "location": response.data.location,
          "output": response.data.output,
      }
        setGameState(gameState => ({
          ...gameState,
          ...updatedItems
        }))
      })
  }

  function saveGame(e) {
    e.preventDefault()
    const saveURL = baseUrl + '/save'
    axios.get(saveURL, { params: { key: gameState.gameId } })
      .then(function (response) {
        const updatedItems = {}
        updatedItems["output"] = response.data.output
        setGameState(gameState => ({
          ...gameState,
          ...updatedItems
        }))
      })
  }

  function loadGame(e) {
    e.preventDefault()
    const loadURL = baseUrl + '/load'

    axios.get(loadURL, { params: { key: gameState.gameId } })
      .then(function (response) {
        const updatedItems = {
          "history": [],
          "isPlaying": true,
          "location": response.data.location,
          "output": response.data.output,
        }
        setGameState(gameState => ({
          ...gameState,
          ...updatedItems
        }))
      })
  }

  function quitGame(e) {
    e.preventDefault()
    const quitURL = baseUrl + '/quit'
    axios.get(quitURL, { params: { key: gameState.gameId } })
      .then(function (response) {
        const updatedItems = {
          "history": [],
          "isPlaying": false,
          "location": "Living Room",
          "offMsg": response.data.output,
        }
        setGameState(gameState => ({
          ...gameState,
          ...updatedItems
        }))
      })
  }

  window.onbeforeunload = () => {
    const quitURL = baseUrl + '/quit'
    axios.get(quitURL, { params: { key: gameState.gameId } })
  };

  function handleClick(e) {
    e.preventDefault()
    if (input === "") {
      return
    }
    axios.get(baseUrl, { params: { command: input, key: gameState.gameId } })
      .then(function (response) {
        const updatedItems = {
          "command": input,
          "output": response.data.output,
          "location": response.data.location
        }
        setGameState(gameState => ({
          ...gameState,
          ...updatedItems
        }))
      })
  }

  return (
    <div className="App">
      <main className='main-content'>
        <SidePanel
          newGameFunction={e => newGame(e)}
          saveFunction={e => saveGame(e)}
          loadFunction={e => loadGame(e)}
          quitFunction={e => quitGame(e)}
          onChange={e => setGameName(e.target.value)}
          isPlaying={gameState.isPlaying}
          location={gameState.location}
        /> 
        {gameState.isPlaying ?
          <GameOnDisplay
            formSubmit={e => handleClick(e)}
            onChange={e => setInput(e.target.value)}
            history={gameState.history} />
          :
          <GameOffDisplay 
          offMsg={gameState.offMsg}
          />
        }
      </main>
    </div>
  );
};

export default App;