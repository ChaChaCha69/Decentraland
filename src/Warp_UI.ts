import { movePlayerTo } from '@decentraland/RestrictedActions'
import * as ui from '@dcl/ui-scene-utils'
import * as utils from '@dcl/ecs-scene-utils'
import { invibox1, invibox2, invibox3  } from './Warp_Component'

let triggerBox = new utils.TriggerBoxShape()

invibox1.addComponent(
    new utils.TriggerComponent(
        triggerBox,{
            onCameraEnter : () => {
                let WarpPrompt = new ui.CustomPrompt(ui.PromptStyles.LIGHT,750,300)
                WarpPrompt.addText("Floor 2",-300,120,Color4.Black(),24)
                WarpPrompt.addText("Floor 3",300,120,Color4.Black(),24)
                WarpPrompt.addButton("Go to Second",-250,0,()=>{movePlayerTo({x:8, y:6,z:7})},ui.ButtonStyles.RED)
                WarpPrompt.addButton("Go to Third",250,0,()=>{movePlayerTo({x:10, y:11,z:7})},ui.ButtonStyles.RED)
                WarpPrompt.addButton("Cancel",0,-120,()=>{WarpPrompt.hide()},ui.ButtonStyles.DARK)
            }
        }
    )
)

invibox1.addComponent(
    new OnPointerDown(
        (e) => {},
        {hoverText: 'Warp here'}
    )
)

invibox2.addComponent(
    new utils.TriggerComponent(
        triggerBox,{
            onCameraEnter : () => {
                let WarpPrompt = new ui.CustomPrompt(ui.PromptStyles.LIGHT,750,300)
                WarpPrompt.addText("Floor 1",-300,120,Color4.Black(),24)
                WarpPrompt.addText("Floor 3",300,120,Color4.Black(),24)
                WarpPrompt.addButton("Go to First",-250,0,()=>{movePlayerTo({x:7, y:1,z:7})},ui.ButtonStyles.RED)
                WarpPrompt.addButton("Go to Third",250,0,()=>{movePlayerTo({x:10, y:11,z:7})},ui.ButtonStyles.RED)
                WarpPrompt.addButton("Cancel",0,-120,()=>{WarpPrompt.hide()},ui.ButtonStyles.DARK)
            }
        }
    )
)

invibox2.addComponent(
    new OnPointerDown(
        (e) => {},
        {hoverText: 'Warp here'}
    )
)

invibox3.addComponent(
    new utils.TriggerComponent(
        triggerBox,{
            onCameraEnter : () => {
                let WarpPrompt = new ui.CustomPrompt(ui.PromptStyles.LIGHT,750,300)
                WarpPrompt.addText("Floor 1",-300,120,Color4.Black(),24)
                WarpPrompt.addText("Floor 2",300,120,Color4.Black(),24)
                WarpPrompt.addButton("Go to First",-250,0,()=>{movePlayerTo({x:7, y:1,z:7})},ui.ButtonStyles.RED)
                WarpPrompt.addButton("Go to Second",250,0,()=>{movePlayerTo({x:8, y:6,z:7})},ui.ButtonStyles.RED)
                WarpPrompt.addButton("Cancel",0,-120,()=>{WarpPrompt.hide()},ui.ButtonStyles.DARK)
            }
        }
    )
)

invibox3.addComponent(
    new OnPointerDown(
        (e) => {},
        {hoverText: 'Warp here'}
    )
)
