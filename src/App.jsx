import './App.css';
import { React, useState, useEffect } from 'react';
import axios from 'axios';
import "nes.css/css/nes.min.css";
import { GameOnDisplay } from './components/GameOnDisplay';
import { GameOffDisplay } from './components/GameOffDisplay'
import { SidePanel } from './components/SidePanel';


const baseUrl = 'https://tlkuno.pythonanywhere.com'

function App() {

  const [gameId, setGameId] = useState(null)
  const [isPlaying, setIsPlaying] = useState(false);
  const [command, setCommand] = useState('');
  const [output, setOutput] = useState(null);
  const [history, setHistory] = useState([]);
  const [currentRoom, setCurrentRoom] = useState("Living Room")
  const [numInteractions, setNumInteractions] = useState(0);
  const [confirmMsg, setConfirmMsg] = useState(null)
  const [offMsg, setOffMsg] = useState(`Welcome to Picnic Quest!\nI'm Junimo the cat, and it's so good that you're here!\n\n\
You are now Marni, the adorable german shepard. You are all bark, \
and no bite, easily scared, but fierce when it comes to defending your \
crew! We live in a well-loved, \
one-story house in the suburbs with two humans who are off at their \
day jobs. As usual, you took this opportunity to take a nice long \
mid-day nap. I left you a letter, please read it when you wake up!\n\n\
Click on New Game to begin!`)

  useEffect(() => {
    if (output !== null) {
      interact();
    }
  }, [numInteractions]);

  useEffect(() => {
    if (confirmMsg !== null) {
      const newHistory = history.slice()
      // if (newHistory.length > 8) { newHistory.splice(0, 2) } limit the number of interactions
      newHistory.push(
        { 'type': 'bot', 'content': confirmMsg })
      setHistory(newHistory)
    }
  }, [confirmMsg]);

  function newGame(e) {
    const newURL = baseUrl + '/new'
    setIsPlaying(true)
    axios.get(newURL)
      .then(function (response) {
        setConfirmMsg(response.data.output)
        setGameId(response.data.key)
      })
  }

  function saveGame(e) {
    e.preventDefault()
    const saveURL = baseUrl + '/save'
    axios.post(saveURL, { params: { key: gameId } })
      .then(function (response) {
        setConfirmMsg(response.data.output)
      })
  }

  function loadGame(e) {
    e.preventDefault()
    const loadURL = baseUrl + '/load'
    setIsPlaying(true)

    axios.get(loadURL, { params: { key: gameId } })
      .then(function (response) {
        setConfirmMsg(response.data.output)
        setCurrentRoom(response.data.location)
      })
  }

  function quitGame(e) {
    e.preventDefault()
    const quitURL = baseUrl + '/quit'
    setHistory([])
    setCurrentRoom("Living Room")
    setOffMsg("Thanks for playing!")
    setIsPlaying(false)
    axios.get(quitURL, { params: { key: gameId } })
      .then(function (response) {
        setConfirmMsg(response.data.output)
      })
  }

  function interact() {
    const newHistory = history.slice()
    // if (newHistory.length > 8) { newHistory.splice(0, 2) } limit the number of interactions
    newHistory.push(
      { 'type': 'user', 'content': command },
      { 'type': 'bot', 'content': output })
    setHistory(newHistory)

    document.getElementById('main_input').value = '';
  }

  function handleClick(e) {
    e.preventDefault()
    axios.get(baseUrl, { params: { command: command, key: gameId } })
      .then(function (response) {
        setNumInteractions(numInteractions + 1)
        setOutput(response.data.output)
        setCurrentRoom(response.data.location)
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
          location={currentRoom}
        />
        {isPlaying ?
          <GameOnDisplay
            formSubmit={e => handleClick(e)}
            inputChange={e => setCommand(e.target.value)}
            history={history} />
          :
          <GameOffDisplay
            displayText={offMsg}
          />
        }
      </main>
    </div>
  );
};

export default App;