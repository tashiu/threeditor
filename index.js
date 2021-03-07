import * as THREE from "three";

import { OrbitControls } from "./src/scripts/js/OrbitControls.js";

import { UI_ELEMENTS } from "./src/scripts/js/ui-elements";

import { add } from "./src/scripts/rs/test.rs";

let camera, scene, renderer, controls;

let geometry, material, mesh;

init();
animate();

function init() {
  camera = new THREE.PerspectiveCamera(
    50,
    window.innerWidth / window.innerHeight
  );
  camera.position.z = 1;

  scene = new THREE.Scene();
  geometry = new THREE.BoxGeometry(1, 1, 1);
  material = new THREE.MeshNormalMaterial();

  mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);

  controls = new OrbitControls(camera, renderer.domElement);

  //controls.update() must be called after any manual changes to the camera's transform
  camera.position.set(0, -2, 5);
  controls.update();
  document.body.appendChild(renderer.domElement);
}

let uiFrame = document.createElement("div");
uiFrame.id = "ui_frame";
uiFrame.appendChild(UI_ELEMENTS.toggler);
document.body.appendChild(uiFrame);

function animate() {
  requestAnimationFrame(animate);

  // required if controls.enableDamping or controls.autoRotate are set to true
  controls.update();

  renderer.render(scene, camera);
}

window.addEventListener("resize", onWindowResize, false);

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
}
