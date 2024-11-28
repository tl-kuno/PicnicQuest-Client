
import api from "./api.js"

async function openGameServer() {
    try {
        const gameInstanceCreated = await api.post('/start');
        return gameInstanceCreated.data;
    } catch (error) {
        console.log(error.message)
        return "error"
    }
}

async function newGame(userName) {
    try {
        const newGame = await api.get('/new', {
            params: {
                userName: userName
            }
        })
        return newGame.data

    } catch (error) {
        console.log(error.message)
        return 'error'
    }
}

async function handleCommand(command) {
    try {
        const gameResponse = await api.get('/command', {
            params: {
                command: command
            }
        })
        console.log(gameResponse)
    } catch (error) {
        console.log(error.message)
        return "error"
    }

}

async function quitGame() {
    try {
        const gameResponse = await api.post('/quit')
        console.log(gameResponse.data.output)
        return gameResponse.data.output
    } catch (error) {
        console.log(error.message)
        return 'error'
    }
}

const gameplay = {
    openGameServer,
    newGame,
    handleCommand,
    quitGame
};

export default gameplay;
