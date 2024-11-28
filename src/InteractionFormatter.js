const blueWords = ["north", "south", "east", "west"]
const features = ["sofa", "tv", "suitcase", "refrigerator", "shelves", "cleaning supplies", "blanket", "window", "windows", "sink", "bathtub", "rocking chair", "dirt pile", "guitar", "neighborhood", "table", "friends"]
const items = ["blueberries", "mushrooms", "dog treats", "towel", "umbrella", "letter", "wooden spoon", "football helmet", "soap", "flashlight"]
const orangeWords = ["mouse", "ants", "raccoon", "birds", "will not be saved"]
const rooms = ["living room", "basement", "kitchen", "pantry", "bedroom", "bathroom", "porch", "alley", "roof", "henderson", "park"]
const help = ["look:", "look at:", "go/move:", "take:", "drop:", "use:", "listen:", "wear:", "inventory:", "savegame:", "loadgame:", "other verbs:"]
const bigWords = ["try these commands:"]
const offMainText = ["welcome to picnic quest!", "you make your way to the park, where all of your friends are there waiting for you."]
const offYellow = ["letter", "junimo", "marni", "congratulations!", "you've completed picnic quest!"]
const gameFunctions = ["new"]
const gameOffReport = ["you brought", "out of 5 picnic items.", "and you invited", "out of 4 friends!"]
const purpleOff = ["well done!"]


function highlightByType(string, searchWords, className) {

    /** 
     * SOURCE CITATION
     * This code was modeled after user bvaughn's Highlighter module on Git Hub
     * link to repository: https://github.com/bvaughn/highlight-words-core
    **/


    var substrings = []
    const stringLower = string.toLowerCase()
    searchWords.forEach((word) => {
        const location = stringLower.indexOf(word)
        if (location >= 0) {
            substrings.push([location, word.length])
        }
    })
    if (substrings.length > 0) {
        substrings = substrings.sort((a, b) => {
            return a[0] - b[0]
        })

        let startIndex = 0;
        let endIndex = substrings[0][0]
        let newStringArray = []

        let i = 0
        do {
            let substring = string.substring(startIndex, endIndex)
            newStringArray.push(substring)
            startIndex = endIndex
            endIndex = startIndex + substrings[i][1]
            substring = string.substring(startIndex, endIndex)
            newStringArray.push(substring)
            startIndex = endIndex
            endIndex = (i < (substrings.length - 1)) ? substrings[i + 1][0] : string.length
            i++
        }
        while (i < substrings.length)

        const substring = string.substring(startIndex)
        newStringArray.push(substring)
        const highlightedText = newStringArray.map((substring) => {
            if (searchWords.includes(substring.toLowerCase())) {
                const returnString = `<mark class=${className}>${substring}</mark>`
                return (returnString)
            }
            else {
                return substring
            }
        }).join("")
        return highlightedText
    }
    else {
        return string
    }
}

function hightLightInteractionWords(string, loadGames = []) {
    // split string into chunks
    // look for directions
    let highlightedString = highlightByType(string, blueWords, "blue-word")
    // look for features
    highlightedString = highlightByType(highlightedString, features, "green-word")
    // look for items
    highlightedString = highlightByType(highlightedString, items, "yellow-word")
    // look for NPCs
    highlightedString = highlightByType(highlightedString, orangeWords, "orange-word")
    // look for rooms
    highlightedString = highlightByType(highlightedString, rooms, "purple-word")
    // look for help commands
    highlightedString = highlightByType(highlightedString, help, "pink-word")
    // look for titles
    highlightedString = highlightByType(highlightedString, bigWords, "big-word")
    // looking for loadgames
    highlightedString = highlightByType(highlightedString, loadGames, "sample-command")

    return (highlightedString)
}

function hightLightIntroductionWords(string) {
    // split string into chunks
    // look for directions
    let highlightedString = highlightByType(string, offMainText, "blue-word")
    // look for features
    highlightedString = highlightByType(highlightedString, offYellow, "yellow-word")
    // look for items
    highlightedString = highlightByType(highlightedString, gameFunctions, "green-word")
    // look for items
    highlightedString = highlightByType(highlightedString, gameOffReport, "pink-word")
    // look for items
    highlightedString = highlightByType(highlightedString, purpleOff, "purple-word")

    return (highlightedString)
}


export {
    hightLightInteractionWords,
    hightLightIntroductionWords
}
