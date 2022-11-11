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
  const [command, setCommand] = useState('');
  const [output, setOutput] = useState(null);
  const [history, setHistory] = useState([]);
  const [numInteractions, setNumInteractions] = useState(0);
  const [confirmMsg, setConfirmMsg] = useState(null)
  const [offMsg, setOffMsg] = useState("You are You are now Marni, the adorable german shepard. Marni is all bark, and no bite. Easily scared, but fierce when it comes to defending your crew! You live in a well-loved, one-story house in the suburbs with two humans who are off at their day jobs. As usual, you took this opportunity to take a nice long mid-day nap. Marni")

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
    axios.post(newURL)
      .then(function (response) {
        setConfirmMsg(response.data.output)
      })
  }

  function saveGame(e) {
    e.preventDefault()
    const saveURL = baseUrl + '/save'
    axios.post(saveURL)
      .then(function (response) {
        setConfirmMsg(response.data.output)
      })
  }

  function loadGame(e) {
    e.preventDefault()
    const loadURL = baseUrl + '/load'
    setIsPlaying(true)
    axios.get(loadURL)
      .then(function (response) {
        setConfirmMsg(response.data.output)
      })
  }

  function quitGame(e) {
    e.preventDefault()
    const loadURL = baseUrl + '/quit'
    setOffMsg("Thanks for playing!")
    setIsPlaying(false)
    axios.get(loadURL)
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
    axios.get(baseUrl, { params: { command: command } }
    )
      .then(function (response) {
        setNumInteractions(numInteractions + 1)
        setOutput(response.data.output)
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
        />
        { isPlaying ? 
        <GameOnDisplay
          formSubmit={e => handleClick(e)}
          inputChange={e => setCommand(e.target.value)}
          history={history}/>
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
