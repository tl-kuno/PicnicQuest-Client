import './App.css';
import { React, useState } from 'react';
import axios from 'axios';
import "nes.css/css/nes.min.css";

const baseUrl = 'https://tlkuno.pythonanywhere.com/?command='


function App() {

  const [command, setCommand] = useState("What next?");
  const [output, setOutput] = useState(null);


  function createURL(){
    let fullUrl = "" + baseUrl
    for (let i = 0; i < command.length; i++)
      if (command[i] === " ") {
        fullUrl = fullUrl + "+"
      } else {
        fullUrl = fullUrl + command[i]
      }
      return fullUrl
  }

  const handleClick = async () => {
      axios({
        method:"GET",
        url: createURL(),
        responseType: 'json'
      })
    .then(function(response) {
      setOutput(response.data.output)
    })
  }

    return (
    <div className="App">
      <div className="nes-container with-title">
        <p className="title">Picnic Quest Test UI</p>
        <div className="nes-container is-rounded is-dark">
          <p>{output}</p>
        </div>
        <div className="nes-field is-inline nes-inline">
          <input type="text"
            id="command_prompt"
            className="nes-input is-dark"
            placeholder={command}
            onChange={e => setCommand(e.target.value)}
          />
        </div>
        <button onClick={handleClick} type="button" className="nes-btn is-success">Try It!</button>
      </div>
    </div>
  );
};

export default App;
