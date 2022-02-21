import { inviboxF1, NFTimg } from "./Furniture";
import * as ui from '@dcl/ui-scene-utils'

NFTimg.addComponent(
    new OnPointerDown(
        (e) => {
            openNFTDialog(
                "ethereum://0x06012c8cf97BEaD5deAe237070F9587f8E7A266d/558536"
            )
        },
        {hoverText: "View Product"}
    ))


inviboxF1.addComponent(
    new OnPointerDown(
        (e) => {
            let WatchP1 = new ui.CustomPrompt(ui.PromptStyles.LIGHT,750,300)
            WatchP1.addText("BERNHARD H. MAYER 150TH",120,120,Color4.FromInts(0,0,0,1),24)
            WatchP1.addText("ANNIVERSARY WATCH",120,90,Color4.FromInts(0,0,0,1),24)
            WatchP1.addText("This collection features a special commemorative coin",120,50,Color4.FromInts(102,102,102,1),14)
            WatchP1.addText("on the watch face at 3 o’clock, displaying the iconic",120,30,Color4.FromInts(102,102,102,1),14)
            WatchP1.addText("Mayer factory building in Pforzheim pre-World War II.",120,10,Color4.FromInts(102,102,102,1),14)
            WatchP1.addIcon("images/BHM3.png",-170,-50,375,500)
            WatchP1.addButton("Cancel",50,-110,()=>{WatchP1.hide()},ui.ButtonStyles.DARK)
            WatchP1.addButton("View on BHM",240,-110,()=>{openExternalURL("https://www.bernhardhmayer.com/watches/collections/powermaster/#1427")},ui.ButtonStyles.RED)
        },
        {hoverText: 'View Product'}
    ))