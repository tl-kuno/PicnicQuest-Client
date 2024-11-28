import './App.css';
import React from 'react';
import ReactHowler from 'react-howler';

import "nes.css/css/nes.min.css";
import happyTune from './resources/happyTune.wav';

import gameplay from './Gameplay.js';

import GameOnScreen from './components/displays/gameOn/GameOnScreen.jsx';
import GameOffScreen from './components/displays/gameOff/GameOffScreen.jsx'
import SidePanel from './components/displays/SidePanel.jsx';

class PicnicQuest extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      input: "",
      userName: "",
      musicPlaying: false,
      isPlaying: false,
      isLoading: true,
      offMsg: "",
      gameState: {
        command: "",
        identifier: "",
        isPlaying: false,
        history: [],
        location: "",
        output: "",
      }
    }
  }

  async componentDidMount() {
    const gameInstance = await gameplay.openGameServer();
    let offMsg = "Uh Oh! Looks like something went wrong. Try re-loading your page.";

    if (gameInstance === "success") {
      offMsg = "Welcome to Picnic Quest!\nI'm Junimo the cat, and it's so good that you're here!\nYou are now Marni, the adorable german shepard. You are all bark, and no bite, easily scared, but fierce when it comes to defending your crew! We live in a well-loved, one-story house in the suburbs with two humans who are off at their day jobs. As usual, you took this opportunity to take a nice long mid-day nap. I left you a letter, please read it when you wake up!\nEnter a name and select New to begin a new game!\n"

    }

    setTimeout(() => { this.setState({ offMsg: offMsg, isLoading: false }) }, 2000)
  }



  // if a new offMsg is set, switch to game off display
  // useEffect(() => {
  //   const updatedItems = {
  //     "command": "",
  //     "identifier": "",
  //     "history": [],
  //     "location": "",
  //     "output": "",
  //   }
  //   setGameState(gameState => ({
  //     ...gameState,
  //     ...updatedItems
  //   }))
  //   setIsPlaying(false)
  // }, [gameState.offMsg])


  onUpdateUserName = (value) => {
    this.setState({
      userName: value
    })
  }

  onUpdateCommand = (value) => {
    const { gameState } = this.state;
    const updatedState = {
      ...gameState,
      command: value
    }

    this.setState({
      gameState: updatedState
    })
  }

  // To start a new game, ping the server /new
  // Response data will allow you to set initial gameState
  onNewGame = async () => {
    const { userName, gameState } = this.state;
    const newGame = await gameplay.newGame(userName)

    if (newGame === "error") {
      return this.setState({
        offMsg: 'Sorry, I am still napping in the sun. Try starting a new game later.'
      })
    }

    const updatedGameState = {
      ...gameState,
      location: newGame.location,
      output: newGame.output
    }

    this.setState({
      isPlaying: true,
      musicPlaying: true,
      gameState: updatedGameState
    })

  }

  // To quit the game, ping the server /quit
  // Reset the gameState to original status
  onQuitGame = async (e) => {
    const endOfGameMsg = await gameplay.quitGame()
    const endOfGameState = {
      "command": "",
      "identifier": "",
      "history": [],
      "location": "",
      "output": "",
    }
    this.setState({
      gameState: endOfGameState,
      offMsg: endOfGameMsg,
      isPlaying: false,
      musicPlaying: false
    })
  }

  // each time a users presses enter to send a command
  // if the command is not an empty string, ping the server /
  // response data is used to update the interaction history and location
  handleCommand = async (e) => {
    e.preventDefault()
    // do nothing if the user did not enter a command
    if (e.target.value === "") {
      return
    }
    // otherwise, send a request containing the command to the server
    else {
      const gameResponse = await gameplay.handleCommand(e.target.value)
    }

    // Every time new output is returned, update the interaction display
    // useEffect(() => {
    //   const newHistory = gameState.history.slice()
    //   // display a command if there was one
    //   if (gameState.command !== "") {
    //     newHistory.push({ 'type': 'user', 'content': gameState.command })
    //     document.getElementById('main_input').value = '';
    //   }
    //   // display the output if there was output
    //   if (gameState.output !== "") {
    //     newHistory.push({ 'type': 'bot', 'content': gameState.output })
    //   }
    //   // update history
    //   const updatedItems = {
    //     "history": newHistory,
    //     "command": "",
    //     "output": "",
    //   }
    //   setGameState(gameState => ({
    //     ...gameState,
    //     ...updatedItems
    //   }))
    //   setInput("")
    // }, [gameState.output])

  };

  renderGameScreen = () => {
    const { gameState, isPlaying, isLoading, offMsg } = this.state;
    const { history, command } = gameState;

    if (isPlaying) {
      return (
        <GameOnScreen
          command={command}
          onUpdateCommand={this.onUpdateCommand}
          onSubmitCommand={this.handleCommand}
          history={history}
        />
      )
    }

    return (
      <GameOffScreen
        isLoading={isLoading}
        offMsg={offMsg}
      />
    )
  }

  render() {
    const { isPlaying, musicPlaying, userName, gameState } = this.state;
    const { location } = gameState || {};

    const gameScreen = this.renderGameScreen();

    return (
      <div className="App">
        <ReactHowler src={happyTune} loop={true} playing={musicPlaying} volume={0.3} />
        <main className='main-content'>
          {gameScreen}
          <SidePanel
            userName={userName}
            onUpdateUserName={this.onUpdateUserName}
            onNewGame={this.onNewGame}
            quitFunction={this.onQuitGame}
            isPlaying={isPlaying}
            location={location}
          />
        </main>
        <div className="footer">created by: <br /><mark className='purple-word'>Alex Meyers</mark>, <mark className='green-word'>Armon Tavakoulnia</mark>, & <mark className='pink-word'>Taylor Kuno</mark></div>
      </div>
    );
  };
}

export default PicnicQuest;
