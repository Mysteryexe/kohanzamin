//wd
import * as THREE from './three.module.js';
import { GLTFLoader } from './GLTFLoader.js';

const intro = document.getElementsByTagName("intro")[0];
const timeline = document.getElementsByTagName("timeline")[0];
console.log("in")
const loader = new GLTFLoader();

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, intro.offsetWidth / intro.offsetHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize( intro.offsetWidth, intro.offsetHeight );
const element = intro.appendChild( renderer.domElement );
element.classList.add("window")
camera.position.z = 5;

// const geometry = new THREE.BoxGeometry( 1, 1, 1 );
// // const material = new THREE.MeshBasicMaterial( { color: 0xDC8032 } );
// // const cube = new THREE.Mesh( geometry, material );
// // scene.add( cube );
// const edges = new THREE.EdgesGeometry( geometry );
// const cube = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xFFFFFF } ) );
// scene.add( cube );
loader.load( '/content/glb/tagh.glb', function ( gltf ) {
	scene.add( gltf.scene );
    const mesh = scene.children[ 0 ]
    scene.add(mesh)
    console.log(mesh)
    mesh.scale.x = 0.05
    mesh.scale.y = 0.05
    mesh.scale.z = 0.05
    mesh.position.set(0,-1.5,0)
    animate()
}, undefined, function ( error ) {

	console.error( error );

} );

function animate() {
    const mesh = scene.children[ 0 ]
    let passed = (window.scrollY + window.innerHeight) / timeline.offsetHeight;
    if (passed > 1){
        passed =1
    }
    renderer.setSize( intro.offsetWidth, intro.offsetHeight );
    requestAnimationFrame( animate );

    mesh.rotation.y = 50*passed;
    mesh.rotation.x = 1*passed;
    // mesh.scale.x = 0.5/passed;
    // mesh.scale.y = 0.5/passed;
    // mesh.scale.z = 0.5/passed;
    renderer.render( scene, camera );
}
