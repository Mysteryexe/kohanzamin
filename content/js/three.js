import * as THREE from 'https://unpkg.com/three/build/three.module.js';

const intro = document.getElementsByTagName("intro")[0];

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
    renderer.setSize( intro.offsetWidth, intro.offsetHeight );
    requestAnimationFrame( animate );

    cube.rotation.x += 0.02;
    cube.rotation.y += 0.01;
    cube.width += 0.05;
    cube.scale.x -= 0.01
    cube.scale.y -= 0.01
    cube.scale.z -= 0.01
    renderer.render( scene, camera );
}

animate();