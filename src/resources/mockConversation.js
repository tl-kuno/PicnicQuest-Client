const mockConversation = [
    {
        type: "junimo",
        msg: "You slowly awaken in a warm, cozy living room. Sunlight pours through the curtains, lighting up the familiar sofa in the center of the room. There are no signs of humans around here, just the soft sound of the trees rustling in the breeze outside. You stretch your paws and arch your back, slowly waking up from a relaxing nap. You suddenly realize that a letter has been placed on the pillow in front of you. In the corner of the room, you can hear the TV quietly buzzing as a show plays on the screen. There is a flashlight sticking out from the corner of the sofa.\n\nTo the North you can see the door to the basement. To the East you can see the closed door to the bedroom. To the South you can see the front door that leads to the porch outside. To the West you see the doorway to the kitchen.\n",
    },
    {
        type: "user",
        msg: 'help'
    },
    {
        type: "junimo",
        msg: "Try these commands:\nLook: Repeat the description of the current room\nLook at: Learn more about a nearby item or feature.\nGo/Move: Using cardinal directions or room names, move your character from room to room.\nTake: Pick up an item and put it in your inventory.\nDrop: Drop an item where you are.\nUse: Use an item in your inventory.\nListen: Listen to an object or feature.\nWear: Put on a piece of clothing or an item.\nInventory: Look at all of your items in your inventory.\nOther verbs: Eat, Read, Nap, Scratch, Invite, Talk, Give.\n",
    },
    {
        type: "user",
        msg: "move kitchen",
    }, {
        type: "junimo",
        msg: "You stand in the brightly lit kitchen. The white tile floor glistens brightly, and rumbling sound of the humming refrigerator fills the room. The humans must have been clumsy earlier, because a thick wooden spoon has rolled under a chair in the center of the room. Nearby you can see a few ants gathered suspiciously together. On the sleek marble countertops, you can see the corner of a plastic container of scrumptious, freshly picked blueberries! These would be perfect for a picnic!\n\nTo the North you can see the pantry.\nTo the East you can see the living room.\n",
    },
    {
        type: "user",
        msg: "look ants",
    }, {
        type: "junimo",
        msg: "There is a long  line of ants leading from outside to a little stain of spilled ketchup on the floor. These humans can be really messy sometimes!\n",
    },
    {
        type: "user",
        msg: "take blueberries",
    }, {
        type: "junimo",
        msg: "These blueberries were freshly picked yesterday from the Johnson Family Blueberry Orchard. These will make an amazing addition to the picnic!\n",
    },
    {
        type: "user",
        msg: "inventory",
    },
    {
        type: "junimo",
        msg: "This is your inventory: Blueberries"
    }
]


export default mockConversation;



    // \nThanks for playing.Quitting...\n
