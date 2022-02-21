import { NPC } from "@dcl/npc-scene-utils";
import { IloveCats } from "./dialog";


export let myNPC = new NPC({position: new Vector3(10,3,10),scale: new Vector3(2,2,2)},'model/arissa.glb',
    ()=>{
    new OnPointerDown(
        (e) => {
            log('NPC activated!')
            myNPC.talk(IloveCats,0)  
        }
    )    
   },
   {
    faceUser: true,
    hoverText: "Talking",

   }
)
myNPC.followPath({
    path: [new Vector3(2,0,2), new Vector3(2,0,4), new Vector3(6,0,2)],
    totalDuration: 4,
    loop: false,
    startingPoint: 0,
    onFinishCallback: () => {
        log('Finished!')
      } 
})