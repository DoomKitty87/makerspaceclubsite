import * as THREE from 'https://threejs.org/build/three.module.js';

//import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

var rndInt;
var objs = [];

//const geotype = new String("");

let scrollHeight = Math.max(
  document.body.scrollHeight, document.documentElement.scrollHeight,
  document.body.offsetHeight, document.documentElement.offsetHeight,
  document.body.clientHeight, document.documentElement.clientHeight
);

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshStandardMaterial( { color: 0xFF6347 });
const torus = new THREE.Mesh(geometry, material);
//scene.add(torus);

//const pointLight = new THREE.PointLight(0xffffff);
//pointLight.position.set(20, 20, 20);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(ambientLight);

//const lightHelper = new THREE.PointLightHelper(pointLight);
//const gridHelper = new THREE.GridHelper(200, 50);
//scene.add(lightHelper, gridHelper);

//const controls = new OrbitControls(camera, renderer.domElement);
scene.background = new THREE.Color("#171D20");
//scene.background = new THREE.Color("#FFFFFF");
function changeBackgroundColor() {
  /*
  const body = document.body, html = document.documentElement;
  const height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
  const t = document.body.getBoundingClientRect().top;
  const color = Math.round((t / (height - window.innerHeight)) * 16777215)
  const colorbg = new THREE.Color(color.toString(16));
  scene.background = colorbg;

  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor((window.pageYOffset / scrollHeight) * 16)];
  }
  scene.background = color;
  return color;
  */
  const color = Math.floor((window.pageYOffset / scrollHeight) * 16777215);
  var colortime = "#" + Number(color).toString(16);
  while (colortime.length < 7) {
    colortime = colortime.concat("0")
  }
  const bgcolor = new THREE.Color(colortime);
  scene.background = bgcolor;
  //scene.background = "0x" + Number(color).toString(16);
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function createNewShape(geometry) {
  //const stringFunction = "THREE." + geotype + "Geometry";
  //const geometry = new window[stringFunction](10, 10, 10);
  var randomColor = getRandomColor();
  const material = new THREE.MeshStandardMaterial( { color: randomColor });
  const thing = new THREE.Mesh(geometry, material);
  const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(200));
  thing.position.set(x, y, z);
  objs.push(thing);
  scene.add(thing);
  //return thing;
}

function chooseGeo() {
  rndInt = Math.floor(Math.random() * 6) + 1;
  if (rndInt == 1) {
    //geotype = "Sphere";
    const geometry = new THREE.SphereGeometry(10, 10, 10);
    createNewShape(geometry);
  }
  else if (rndInt == 2) {
    //geotype = "Box";
    const geometry = new THREE.BoxGeometry(10, 10, 10);
    createNewShape(geometry);
  }
  else if (rndInt == 3) {
    //geotype = "Torus";
    const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
    createNewShape(geometry);
  }
  else if (rndInt == 4) {
    //geotype = "Dodecahedron";
    const geometry = new THREE.DodecahedronGeometry(10, 0);
    createNewShape(geometry);
  }
  else if (rndInt == 5) {
    //geotype = "Icosahedron";
    const geometry = new THREE.IcosahedronGeometry(10, 0);
    createNewShape(geometry);
  }
  else if (rndInt == 6) {
    //geotype = "Cylinder";
    const geometry = new THREE.CylinderGeometry(5, 5, 20, 32);
    createNewShape(geometry);
  }
}

function addStar() {
  var randomColor = getRandomColor();
  const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  const material = new THREE.MeshStandardMaterial( { color: randomColor });
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(200));

  star.position.set(x, y, z);
  scene.add(star);
}

Array(2000).fill().forEach(addStar);
Array(100).fill().forEach(chooseGeo);
//scene.background = spaceTexture;

//const cubeTexture = new THREE.TextureLoader().load('whatever.png');

//const thingy = new THREE.Mesh(
//  new THREE.BoxGeometry(3, 3, 3),
//  new THREE.MeshBasicMaterial( { map: cubeTexture })
//);

//const sphereTexture = new THREE.TextureLoader().load('sphere.png');
//const normalTexture = new THREE.TextureLoader().load('normal.jpg');
/*
const sphereThingy = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshStandardMaterial( { map: sphereTexture, normalMap: normalTexture })
);
*/
//scene.add(thingy, sphereThingy);

function moveCamera() {
  const t = document.body.getBoundingClientRect().top;
  //torus.rotation.x += 0.05;
  //torus.rotation.y += 0.001;
  //torus.rotation.z += 0.05;
  objs.forEach(function(thing) {
    thing.rotation.x += 0.05;
    thing.rotation.y += 0.001;
    thing.rotation.z += 0.05;
  });
  camera.position.z = t * -0.00001;
  camera.position.x = t * -0.000002;
  camera.position.y = t * -0.000002;
  camera.rotation.x += 0.002;
  camera.rotation.y += 0.002;
  camera.rotation.z += 0.002;

}

document.body.onscroll = moveCamera;

function animate() {
  requestAnimationFrame(animate);
  //torus.rotation.x += 0.01;
  //torus.rotation.y += 0.005;
  //torus.rotation.z += 0.01;

  //controls.update();
  //changeBackgroundColor();
  objs.forEach(function(thing) {
    //thing.position.x += (Math.round(Math.random()) * 2 - 1) / 200;
    //thing.position.y += (Math.round(Math.random()) * 2 - 1) / 200;
    //thing.position.z += (Math.round(Math.random()) * 2 - 1) / 200;
    thing.rotation.x += 0.001;
    thing.rotation.y += 0.0005;
    thing.rotation.z += 0.001;
  });
  renderer.render(scene, camera);
}

animate();
