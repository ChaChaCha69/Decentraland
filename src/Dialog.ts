import { Dialog } from "@dcl/npc-scene-utils"

export let IloveCats: Dialog[] = [
    {
        text: 'Hello my name is Pond'
    },
    {
        text: 'Do you have fun?',
        isQuestion: true,
        buttons: [
            {label: "Exactly!", goToDialog: 3},
            {label: "No!", goToDialog:3}
        ]
    },
    {
       text: 'Lets go to BHM land',
       isEndOfDialog: true
    }
]
