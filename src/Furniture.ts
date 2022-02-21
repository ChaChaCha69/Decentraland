import { inviMat } from "./Warp_Component"

export const WatchPodium1 = new Entity()
export const NFTimg = new Entity()
export const inviboxF1 = new Entity()

WatchPodium1.addComponent(new Transform({ 
    position: new Vector3(11.5,7.3,12),
    scale: new Vector3(2.5,1.8,2.5),
    rotation: new Quaternion(0,-1,0,1)
}))
WatchPodium1.addComponent(new GLTFShape("model/BHM_Room.glb"))

inviboxF1.addComponent(new BoxShape())
inviboxF1.addComponent(new Transform({
    position: new Vector3(10.45,6.25,12.62),
    scale: new Vector3(1,1,1)
}))
inviboxF1.addComponent(inviMat)
inviboxF1.getComponent(BoxShape).withCollisions = true

NFTimg.addComponent(new Transform({
    position: new Vector3(3, 7.5, 14.2),
    scale: new Vector3(3,3,3),
    rotation: new Quaternion(0,0,0,1)
}))
NFTimg.addComponent(new NFTShape(
    "ethereum://0x06012c8cf97BEaD5deAe237070F9587f8E7A266d/558536", {
        style: PictureFrameStyle.Blocky
    }
))

engine.addEntity(NFTimg)
engine.addEntity(WatchPodium1)
engine.addEntity(inviboxF1)