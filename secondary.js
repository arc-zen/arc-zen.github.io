import * as THREE from "https://unpkg.com/three@0.126.1/build/three.module.js";
function randomInteger(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
function generateCoordinates() {
	return [
		randomInteger(0 - window.innerHeight / 100, window.innerWidth / 100),
		randomInteger(0 - window.innerHeight / 100, window.innerHeight / 100),
		randomInteger(-10, 10),
	];
}
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x00000000);
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
let shapes = new Array();
const geometry = new THREE.IcosahedronGeometry(16, 1);
let material1 = new THREE.MeshBasicMaterial({ color: "gray" });
material1.wireframe = true;
let mesh1 = new THREE.Mesh(geometry, material1);
scene.add(mesh1);
let material2 = new THREE.MeshBasicMaterial({ color: "gray" });
material2.wireframe = true;
let mesh2 = new THREE.Mesh(geometry, material2);
scene.add(mesh2);
let material3 = new THREE.MeshBasicMaterial({ color: "gray" });
material3.wireframe = true;
let mesh3 = new THREE.Mesh(geometry, material3);
scene.add(mesh3);
let material4 = new THREE.MeshBasicMaterial({ color: "gray" });
material4.wireframe = true;
let mesh4 = new THREE.Mesh(geometry, material4);
scene.add(mesh4);
let speed = 0;
function animate() {
	requestAnimationFrame(animate);
	renderer.render(scene, camera);
	if (speed >= 0.02) speed = 0.001;
	mesh1.rotation.x += speed;
	mesh1.rotation.y += speed;

	mesh2.rotation.x -= speed;
	mesh2.rotation.y -= speed;

	mesh3.rotation.x += speed;
	mesh3.rotation.y -= speed;

	mesh4.rotation.x -= speed;
	mesh4.rotation.y += speed;
	speed += 0.000001;
}
animate();
// camera.position.z = 150;
