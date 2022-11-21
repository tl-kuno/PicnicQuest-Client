import './App.css';
import { React, useState, useEffect } from 'react';
import axios from 'axios';
import "nes.css/css/nes.min.css";
import { GameOnDisplay } from './components/GameOnDisplay';
import { GameOffDisplay } from './components/GameOffDisplay'
import { SidePanel } from './components/SidePanel';


const baseUrl = 'https://tlkuno.pythonanywhere.com'

function App() {
  const [test, setTest] = useState(null)
  const [loadGames, setLoadGames] = useState([])
  const [input, setInput] = useState("")
  const [gameName, setGameName] = useState("")
  const [gameState, setGameState] = useState({
    command: "",
    gameId: null,
    userIp: null,
    history: [],
    isPlaying: false,
    location: "",
    offMsg: "",
    output: "",
  })

  // on first page render, get the IP address of user
  useEffect(() => {
    const getIp = async () => {
      const res = await axios.get('https://geolocation-db.com/json/')
      const updatedItems = {
        "userIp": res.data.IPv4,
      }
      setGameState(gameState => ({
        ...gameState,
        ...updatedItems
      }))
    }
    getIp()
  }, []);

  // Once an IP address is found, ping the server with start command
  // Until it returns and sets the offMsg
  // While loop is so that if server is "sleeping", will ping again
  useEffect(() => {
    const startURL = baseUrl + '/start'
    while (gameState.offMsg === "") {
      axios.get(startURL, { params: { ip_address: gameState.userIp } })
        .then(function (response) {
          const updatedItems = {
            "offMsg": response.data.output
          }
          setLoadGames(response.data.loadGames)
          setGameState(gameState => ({
            ...gameState,
            ...updatedItems
          }))
        })
    }
  }, [gameState.userIp])

  // Every time new output is returned, update the interaction display
  useEffect(() => {
    const newHistory = gameState.history.slice()
    // display a command if there was one
    if (gameState.command !== "") {
      newHistory.push({ 'type': 'user', 'content': gameState.command })
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

  // To start a new game, ping the server /new
  // Response data will allow you to set initial gameState
  function newGame(e) {
    e.preventDefault()
    const newURL = baseUrl + '/new'
    axios.get(newURL, { params: { key: gameName, ip_address: gameState.userIp } })
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

  // To save the game, ping server /save
  // Will receive output string indicating outcome (succes/error)
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


  // To load a game, ping server /load
  // Response data will allow you to set the gameState
  // from the previously saved game's status 
  // toggle isPlaying to True
  function loadGame(e) {
    e.preventDefault()
    const loadURL = baseUrl + '/load'

    axios.get(loadURL, { params: { key: gameState.gameId } })
      .then(function (response) {
        setTest(response.data)
        const updatedItems = {
          "command": response.data.command,
          "gameId": response.data.gameId,
          "history": response.data.history,
          "input": "",
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

  // To quit the game, ping the server /quit
  // Reset the gameState to original status
  // Update the available load games
  function quitGame(e) {
    e.preventDefault()
    const quitURL = baseUrl + '/quit'
    while (gameState.offMsg === "") {
      axios.get(quitURL, { params: { key: gameState.gameId } })
        .then(function (response) {
          setInput("")
          setLoadGames(response.data.loadGames)
          const updatedItems = {
            "command": "",
            "gameId": null,
            "history": [],
            "isPlaying": false,
            "location": "",
            "offMsg": response.data.output,
            "output": "",
          }
          setGameState(gameState => ({
            ...gameState,
            ...updatedItems
          }))
        })
    }
  }

  // When the user leaves the page, ping server /quit
  // so it can perform clean up functions
  window.onbeforeunload = () => {
    const quitURL = baseUrl + '/quit'
    axios.get(quitURL, { params: { key: gameState.gameId } })
  };

  // each time a users presses enter to send a command
  // if the command is not an empty string, ping the server /
  // response data is used to update the interaction history and location
  function handleCommand (e) {
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
          loadGames={loadGames}
          quitFunction={e => quitGame(e)}
          onChange={e => setGameName(e.target.value)}
          isPlaying={gameState.isPlaying}
          location={gameState.location}
        />
        {gameState.isPlaying ?
          <GameOnDisplay
            formSubmit={e => handleCommand(e)}
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