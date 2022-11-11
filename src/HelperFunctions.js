const directions = ["north", "south", "east", "west"]
const features = ["sofa", "tv",  "suitcase", "refrigerator", "shelves", "cleaning supplies", "blanket", "window", "sink", "bathtub", "rocking chair", "dirt pile", "guitar", "neighborhood", "table", "friends"]
const items = ["blueberries", "mushrooms", "dog treats", "towel", "umbrella", "letter", "wooden spoon", "football helmet", "soap", "flashlight"]
const npcs = ["mouse", "ants", "raccoon", "birds"]
const rooms = ["living room", "basement", "kitchen", "pantry", "bedroom", "bathroom", "porch", "alley", "roof", "park"]



function highlightByType(string, searchWords, className){

/** 
 * SOURCE CITATION
 * This code was modeled after user bvaughn on Git Hub
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
        substrings = substrings.sort((a,b)=> {
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
            endIndex = (i < (substrings.length -1)) ? substrings[i+1][0] : string.length
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

function hightLightWords(string){
// split string into chunks
    // look for directions
    let highlightedString = highlightByType(string, directions, "direction-word")
    // look for features
    highlightedString = highlightByType(highlightedString, features, "feature-word")
    // look for items
    highlightedString = highlightByType(highlightedString, items, "item-word")
    // look for NPCs
    highlightedString = highlightByType(highlightedString, npcs, "npc-word")
    // look for rooms
    highlightedString = highlightByType(highlightedString, rooms, "room-word")

return(highlightedString)}

export {
    highlightByType,
    hightLightWords
}
