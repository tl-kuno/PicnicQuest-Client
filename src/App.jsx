import './App.css';
import { React, useState, useEffect } from 'react';
import axios from 'axios';
import "nes.css/css/nes.min.css";
import { MainInput } from './components/MainInput';
import { InteractionDisplay } from './components/InteractionDisplay';

const baseUrl = 'https://tlkuno.pythonanywhere.com'

function App() {

  const [command, setCommand] = useState('');
  const [output, setOutput] = useState(null);
  const [history, setHistory] = useState([]);
  const [numInteractions, setNumInteractions] = useState(0);

  useEffect(() => {
    if (output !== null) {
      interact();
    }
  }, [numInteractions]);

  function interact() {
    const newHistory = history.slice()
    // if (newHistory.length > 8) { newHistory.splice(0, 2) } limit the number of interactions
    newHistory.push(
      {'type': 'user', 'content': command }, 
      {'type': 'bot', 'content': output })
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
      <section className="nes-container with-title is-dark">
        <p className="title">Picnic Quest Test UI</p>
        <InteractionDisplay history={history}/>
        <form onSubmit={e => handleClick(e)}>
          <MainInput
            onChange={e => setCommand(e.target.value)}
          />
        </form>
      </section>
    </div>
  );
};

export default App;
