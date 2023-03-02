import * as THREE from 'https://unpkg.com/three/build/three.module.js';

const intro = document.getElementsByTagName("intro")[0];
const timeline = document.getElementsByTagName("timeline")[0];

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, intro.offsetWidth / intro.offsetHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize( intro.offsetWidth, intro.offsetHeight );
const element = intro.appendChild( renderer.domElement );
element.classList.add("window")

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
// const material = new THREE.MeshBasicMaterial( { color: 0xDC8032 } );
// const cube = new THREE.Mesh( geometry, material );
// scene.add( cube );
const edges = new THREE.EdgesGeometry( geometry );
const cube = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xFFFFFF } ) );
scene.add( cube );


camera.position.z = 5;

function animate() {
    // console.log(passed)
    let passed = (window.scrollY + window.innerHeight) / timeline.offsetHeight;
    renderer.setSize( intro.offsetWidth, intro.offsetHeight );
    requestAnimationFrame( animate );

    cube.rotation.x = 100*passed;
    cube.rotation.y = 100*passed;
    cube.scale.x = -5*passed;
    cube.scale.y = -5*passed;
    cube.scale.z = -5*passed;
    renderer.render( scene, camera );
}

animate();