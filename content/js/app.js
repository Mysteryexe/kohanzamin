import * as THREE from 'three';

// import { GUI } from 'three/addons/libs/lil-gui.module.min.js';

import { PLYLoader } from './PLYLoader.js';

let renderer, scene, camera;

let spotLight, lightHelper;

init();


function init() {
	const intro = document.getElementsByTagName("intro")[0];

	renderer = new THREE.WebGLRenderer( { antialias: true, alpha: true } );
	// alpha: true 
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( intro.offsetWidth, window.innerHeight );
	
	const element = intro.appendChild( renderer.domElement );
	element.classList.add("window")

	renderer.shadowMap.enabled = true;
	renderer.shadowMap.type = THREE.PCFSoftShadowMap;

	renderer.outputEncoding = THREE.sRGBEncoding;

	renderer.toneMapping = THREE.ACESFilmicToneMapping;
	renderer.toneMappingExposure = 1;

	renderer.setAnimationLoop( render );

	scene = new THREE.Scene();

	camera = new THREE.PerspectiveCamera( 30, intro.offsetWidth / window.innerHeight,0.1, 1000 );
	camera.position.set( 0, 25, 150 );
	//( 70, 50, 10 )

	const ambient = new THREE.HemisphereLight( 0xffffff, 0x444444, 0.06 );
	scene.add( ambient );

	const loader = new THREE.TextureLoader().setPath( '/content/textures/' );
	const filenames = ['disturb.jpg','checker.png','3.jpg'];

	const textures = { none: null };

	for ( let i = 0; i < filenames.length; i ++ ) {

		const filename = filenames[ i ];

		const texture = loader.load( filename );
		texture.minFilter = THREE.LinearFilter;
		texture.magFilter = THREE.LinearFilter;
		texture.encoding = THREE.sRGBEncoding;

		textures[ filename ] = texture;

	}

	spotLight = new THREE.SpotLight( 0xffffff, 20 );
	spotLight.position.set( 25, 50, 25 );
	spotLight.angle = Math.PI / 6;
	spotLight.penumbra =1;
	spotLight.decay = 2;
	spotLight.distance = 120;
	spotLight.map = textures['3.jpg'];

	spotLight.castShadow = true;
	spotLight.shadow.mapSize.width = 1024;
	spotLight.shadow.mapSize.height = 1024;
	spotLight.shadow.camera.near = 10;
	spotLight.shadow.camera.far = 200;
	spotLight.shadow.focus = 1;
	scene.add( spotLight );

	// lightHelper = new THREE.SpotLightHelper( spotLight );
	// scene.add( lightHelper );

	//

	new PLYLoader().load( '/content/ply/kooze.ply', function ( geometry ) {

		geometry.scale( 10,10,10);
		// ( 0.024, 0.024, 0.024 )
		geometry.computeVertexNormals();

		const material = new THREE.MeshLambertMaterial();

		const mesh = new THREE.Mesh( geometry, material );
		mesh.rotation.x = -Math.PI / 2;
		mesh.rotation.z = Math.PI / 2;
		// mesh.rotation.y += Math.PI / 4;
		
		// mesh.position.y = 15;
		mesh.position.set(-5,-5,0)
		mesh.castShadow = true;
		mesh.receiveShadow = true;
		scene.add( mesh );

	} );

	const geometry = new THREE.BoxGeometry(100, 100, 5);
	const material = new THREE.MeshPhongMaterial( { color: 0x464646 } );

	const plane = new THREE.Mesh( geometry, material );
	plane.position.set( 0, - 1, 0 );
	plane.rotation.x -= Math.PI / 2;
	plane.receiveShadow = true;
	plane.castShadow = true;
	scene.add( plane );
	window.addEventListener( 'resize', onWindowResize );
}

function onWindowResize() {
	const intro = document.getElementsByTagName("intro")[0];
	camera.aspect = intro.offsetWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize( intro.offsetWidth, window.innerHeight );

}

function render() {
	const element = document.getElementsByTagName("canvas")[0]
	const kooze = scene.children[2]
	// const time = performance.now() / 3000;
	let passed = (window.scrollY + (window.innerHeight/2)) / timeline.offsetHeight;
	if (passed > 1){
        passed =1
    }
	spotLight.position.x = Math.cos( passed*45 ) * -25;
	spotLight.position.z = Math.sin( passed*45 ) * -25;
	spotLight.distance = 150 - 120*(passed)
	kooze.position.y = 200*passed - 12.5
	if (kooze.position.y > 20){
		if(element.style.opacity >= 0){
		element.style.opacity = 2 - 8*passed
	}else{
		element.style.opacity = 0
	}
	}else{
		element.style.opacity = 1
	}
	camera.position.y = 200*passed + 20
	// lightHelper.update();

	renderer.render( scene, camera );

}
