import './App.css';
import {React, useState} from 'react';
import axios from 'axios';
import "nes.css/css/nes.min.css";

function App() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState('');

  const handleClick = async () => {
    setIsLoading(true);
    try {
      const {data} = await axios.post(
        'https://http://tlkuno.pythonanywhere.com/',
        {command: 'sample command'},
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        },
      );

      console.log(JSON.stringify(data, null, 4));

      setData(data);
    } catch (err) {
      setErr(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      <div className="nes-container with-title">
        <p className="title">Picnic Quest Test UI</p>
        <button type="button" className="nes-btn is-success">Click here</button>
      </div>
    </div>
  );
}

export default App;
