let spark1 = new Entity()
let spark2 = new Entity()
let spark3 = new Entity()

export let invibox1 = new Entity()
export let invibox2 = new Entity()
export let invibox3 = new Entity()

export const inviMat = new Material()
inviMat.albedoColor = new Color4(5,5,5,0)

spark1.addComponent(new Transform({ position: new Vector3(9, 0, 7),scale: new Vector3(1,1,1) }))
spark1.addComponent(new GLTFShape("model/Spark.glb"))

spark2.addComponent(new Transform({ position: new Vector3(6, 6, 7),scale: new Vector3(1,1,1) }))
spark2.addComponent(new GLTFShape("model/Spark.glb"))

spark3.addComponent(new Transform({ position: new Vector3(7, 9, 8),scale: new Vector3(1,1,1) }))
spark3.addComponent(new GLTFShape("model/Spark.glb"))

invibox1.addComponent(new Transform({ position: new Vector3(9, 1, 7),scale: new Vector3(1,1,1) }))
invibox1.addComponent(new BoxShape())
invibox1.addComponent(inviMat)
invibox1.getComponent(BoxShape).withCollisions = false

invibox2.addComponent(new Transform({ position: new Vector3(6, 7, 7),scale: new Vector3(1,1,1) }))
invibox2.addComponent(new BoxShape())
invibox2.addComponent(inviMat)
invibox2.getComponent(BoxShape).withCollisions = false

invibox3.addComponent(new Transform({ position: new Vector3(7, 10, 8),scale: new Vector3(1,1,1) }))
invibox3.addComponent(new BoxShape())
invibox3.addComponent(inviMat)
invibox3.getComponent(BoxShape).withCollisions = false

engine.addEntity(spark1)
engine.addEntity(spark2)
engine.addEntity(spark3)
engine.addEntity(invibox1)
engine.addEntity(invibox2)
engine.addEntity(invibox3)
