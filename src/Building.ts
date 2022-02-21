const BHM_Building = new Entity('BHM Building')
const transform3 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
BHM_Building.addComponent(new Transform({position: new Vector3(8, 0, 8),rotation: new Quaternion(0, 0, 0, 1),scale: new Vector3(1, 1, 1)}))
BHM_Building.addComponent(new GLTFShape("model/BHM Building.glb"))
BHM_Building.getComponent(GLTFShape).withCollisions = true
BHM_Building.getComponent(GLTFShape).isPointerBlocker = true
BHM_Building.getComponent(GLTFShape).visible = true

engine.addEntity(BHM_Building)