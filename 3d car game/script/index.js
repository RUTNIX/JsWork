scene = new THREE.Scene()
camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100000)
camera.position.z = 3000
camera.position.y = 1000
scene.rotation.y = -36.12
renderer  = new THREE.WebGLRenderer({alpha:true, antialias:true})
renderer.setClearColor(0x000000, 0)
renderer.setSize(1400, 800)

renderer.domElement.setAttribute('id', 'place')
document.body.insertBefore(renderer.domElement, document.body.firstChild)



const aLight = new THREE.AmbientLight(0x404040, 5)
const pLight = new THREE.PointLight(0xFFFFFF, 6)
scene.add(aLight)
pLight.position.set(1220,1300, 123)
scene.add(pLight)

let loader = new THREE.GLTFLoader()
let obj = null
   
loader.load('/road/scene.gltf', function(gltf){
    obj = gltf
    obj.scene.scale.set(2,2,2)
    scene.add(obj.scene)
    
})

let car = null
loader.load('/car/scene.gltf', function(gltf){
    car = gltf
    
    car.scene.scale.set(2,2,2)
    car.scene.position.y=595
    car.scene.rotation.y=1.55
    car.scene.position.x=-1800
    scene.add(car.scene)
    car.applyQuaternion( camera.quaternion );
   
})

let speed = 0
let cmr = 0

document.addEventListener("keydown", (e)=>{
   
    if(e.code == 'KeyW'){
        speed+=5
        obj.scene.position.x-=speed
        
    }
    
    if(e.code == 'KeyA'){
        obj.scene.rotation.y-=0.1
    }
    if(e.code == 'KeyD'){
        obj.scene.rotation.y+=0.1

    }
    if(e.code == 'KeyS'){
        speed+=5
        obj.scene.position.x+=speed

    }
}

);

document.addEventListener("keyup", (e)=>{
   speed=0
}
);
function animate(){
    requestAnimationFrame(animate)
    
    
   
   
    renderer.render(scene, camera)
}

animate()

// scene = new THREE.Scene()
// camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100000)
// camera.position.z = 3000
// camera.position.y = 1000
// camera.position.x = 1
// scene.rotation.y = 1.6


// renderer  = new THREE.WebGLRenderer({alpha:true, antialias:true})
// renderer.setClearColor(0x000000, 0)
// renderer.setSize(1400, 800)

// renderer.domElement.setAttribute('id', 'place')
// document.body.insertBefore(renderer.domElement, document.body.firstChild)


// const aLight = new THREE.AmbientLight(0x404040, 5)
// const pLight = new THREE.PointLight(0xFFFFFF, 6)
// scene.add(aLight)
// pLight.position.set(1200,1200, 112)
// scene.add(pLight)

// let loader = new THREE.GLTFLoader()
// let obj = null
   
// loader.load('/road/scene.gltf', function(gltf){
//     obj = gltf
//     obj.scene.scale.set(2,2,2)
//     scene.add(obj.scene)
    
// })

// let car = null
// loader.load('/car/scene.gltf', function(gltf){
//     car = 
   
// })

// let speed = 0
// let cmr = 0
// // let move1 =obj.scene.position.x-=speed
// // let move2 =obj.scene.position.x+=speed
// document.addEventListener("keydown", (e)=>{
   
//     if(e.code == 'KeyW'){
//         if(car.scene.rotation.y > 4 && car.scene.rotation.y < 5){
//             speed+=5
//            obj.scene.position.x+=speed
//        }else if(car.scene.rotation.y < 3){
//              speed+=5
//             obj.scene.position.x-=speed
//         }else if(car.scene.rotation.y > 3 && car.scene.rotation.y < 6){
//             speed+=5
//             obj.scene.position.z+=speed
//         }
//         else if(car.scene.rotation.y > 6 && car.scene.rotation.y < 7){
//             speed+=5
//             obj.scene.position.z-=speed
//         }else{
//             car.scene.rotation.y = 1.55
//         }
       
//     }
    
//     if(e.code == 'KeyA'){
//         speed+=5
//         car.scene.rotation.y+=0.1 
//         console.log(car.scene.rotation.y)
//     }
//     if(e.code == 'KeyS'){
//         if(car.scene.rotation.y > 7 && car.scene.rotation.y < 6){
//             speed+=5
//            obj.scene.position.x-=speed
//        }else if(car.scene.rotation.y < 3){
//              speed+=5
//             obj.scene.position.z+=speed
//         }else if(car.scene.rotation.y > 6 && car.scene.rotation.y < 3){
//             speed+=5
//             obj.scene.position.x-=speed
//         }
//         else if(car.scene.rotation.y > 4 && car.scene.rotation.y < 5){
//             speed+=5
//             obj.scene.position.x+=speed
//         }else{
//             car.scene.rotation.y = 1.55
//         }
       
//     }
    
//     if(e.code == 'KeyD'){
//         speed+=5
//         car.scene.rotation.y-=0.1 
//         console.log(car.scene.rotation.y)
//     }
//     // if(e.code == 'KeyA'){
//     //     speed+=5
//     //     car.scene.rotation.y-=0.1 
        
//     // }
    
//     // if(e.code == 'KeyD'){
//     //     speed+=5
//     //     obj.scene.rotation.y+=0.1
        
//     // }
//     // if(e.code == 'KeyS'){
//     //     speed+=5
//     //     obj.scene.position.x+=speed

//     // }
    
// }

// );

// document.addEventListener("keyup", (e)=>{
//    speed=0
// }
// );
// function animate(){
//     requestAnimationFrame(animate)
    
    
   
   
//     renderer.render(scene, camera)
// }

// animate()