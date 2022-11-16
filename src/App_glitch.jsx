import './App.css';
import { React, useState, useEffect } from 'react';
import axios from 'axios';
import "nes.css/css/nes.min.css";
import { GameOnDisplay } from './components/GameOnDisplay';
import { GameOffDisplay } from './components/GameOffDisplay'
import { SidePanel } from './components/SidePanel';


const baseUrl = 'https://tlkuno.pythonanywhere.com'

function App() {

  const [isPlaying, setIsPlaying] = useState(false);
  const [input, setInput] = useState(null);
  const [command, setCommand] = useState(null);
  const [output, setOutput] = useState(null);
  const [history, setHistory] = useState([]);
  const [currentRoom, setCurrentRoom] = useState("Living Room")
  const [offMsg, setOffMsg] = useState(``)

  useEffect(() => {
    const startURL = baseUrl + '/start'
    axios.post(startURL)
      .then(function (response) {
        setOffMsg(response.data.output)})
      }, []);


  useEffect(() => { interact() }, [output, command]);

  function newGame(e) {
    e.preventDefault()
    const newURL = baseUrl + '/new'
    setIsPlaying(true)
    axios.post(newURL)
      .then(function (response) {
        setOutput(response.data.output)
      })
  }

  function saveGame(e) {
    e.preventDefault()
    const saveURL = baseUrl + '/save'
    axios.post(saveURL)
      .then(function (response) {
        setOutput(response.data.output)
      })
  }

  function loadGame(e) {
    e.preventDefault()
    const loadURL = baseUrl + '/load'
    setIsPlaying(true)

    axios.get(loadURL)
      .then(function (response) {
        setOutput(response.data.output)
        setCurrentRoom(response.data.location)
      })
  }

  function quitGame(e) {
    e.preventDefault()
    const loadURL = baseUrl + '/quit'
    axios.post(loadURL)
      .then(
        setHistory([]),
        setCurrentRoom("Living Room"),
        setOffMsg("Thanks for playing!"),
        setIsPlaying(false),
      )
  }

  window.onbeforeunload = () => {
    const quitURL = baseUrl + '/quit'
    axios.post(quitURL)
  };

  function interact() {
    const newHistory = history.slice()
    // if (newHistory.length > 8) { newHistory.splice(0, 2) } limit the number of interactions

    if (command !== null) {
      newHistory.push(
        { 'type': 'user', 'content': command })
    }
    if (output !== null) {
      newHistory.push(
        { 'type': 'bot', 'content': output })
    }

    setHistory(newHistory)

    // document.getElementById('main_input').value = '';
  }

  function handleClick(e) {
    e.preventDefault()
    setCommand(input)
    axios.get(baseUrl, { params: { command: command } }
    )
      .then(function (response) {
        setOutput(response.data.output)
        setCurrentRoom(response.data.location)
      })
      .then(function (response) {
        setInput("")
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
          isPlaying={isPlaying}
          currentRoom={currentRoom}
        />
        {isPlaying ?
          <GameOnDisplay
            formSubmit={e => handleClick(e)}
            inputChange={e => setInput(e.target.value)}
            history={history} />
          :
          <GameOffDisplay
            displayText={offMsg}
          />
        }
      </main>
      <footer>CS </footer>
    </div>
  );
};

export default App;
