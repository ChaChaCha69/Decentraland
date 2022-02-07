import { movePlayerTo } from '@decentraland/RestrictedActions'

let base = new Entity()

base.addComponent(new GLTFShape("model/Theatre.glb"))
base.addComponent(
  new Transform({
    position: new Vector3(8,0,8)
}))

base.getComponent(Transform).rotation.eulerAngles = new Vector3(0,270,0)


let circle = new CylinderShape()
let wheel = new Entity()

wheel.addComponent(circle)
wheel.addComponent(
  new Transform({
    position: new Vector3(6,2,11.9),
    rotation: Quaternion.Euler(90,0,0),
    scale: new Vector3(1,0.05,1),
  }))

let myMat = new Material()
myMat.albedoTexture = new Texture("images/hypno-wheel.js")
wheel.addComponent(myMat)

let player = Camera.instance

wheel.addComponent(
  new OnPointerDown(
    (e) => {
       log("Will")
    },
    {button: ActionButton.POINTER, hoverText: "Spin"}
))

const respawner = new Entity()
respawner.addComponent(new BoxShape())
respawner.addComponent(new Transform({ position: new Vector3(8, 0, 8) }))
respawner.addComponent(
  new OnPointerDown(
    (e) => {
      movePlayerTo({ x: 2, y: 10, z: 2 }, { x: 8, y: 1, z: 8 })
    },
    { hoverText: "Move player" }
  )
)

engine.addEntity(respawner)
engine.addEntity(wheel)
engine.addEntity(base)
