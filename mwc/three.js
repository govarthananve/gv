// Three.js variables
let scene, camera, renderer, controls;
let currentMesh = null;
let animationId = null;

function initThreeJS() {
  console.log("Initializing Three.js...");

  if (typeof THREE === "undefined") {
    console.error("Three.js library not loaded");
    return;
  }

  const canvas = document.getElementById("threeCanvas");
  if (!canvas) {
    console.error("Canvas element not found");
    return;
  }

  const container = canvas.parentElement;

  // Scene setup
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xf8f9fa);

  // Camera setup
  camera = new THREE.PerspectiveCamera(
    75,
    container.clientWidth / container.clientHeight,
    0.1,
    1000
  );
  camera.position.set(5, 5, 5);

  // Renderer setup
  renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  // Controls setup - only if OrbitControls is available
  if (typeof THREE.OrbitControls !== "undefined") {
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.5;
  } else {
    console.warn("OrbitControls not available");
  }

  // Lighting setup
  const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
  directionalLight.position.set(10, 10, 5);
  directionalLight.castShadow = true;
  directionalLight.shadow.mapSize.width = 2048;
  directionalLight.shadow.mapSize.height = 2048;
  scene.add(directionalLight);

  // Add a ground plane
  const groundGeometry = new THREE.PlaneGeometry(20, 20);
  const groundMaterial = new THREE.MeshLambertMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 0.1,
  });
  const ground = new THREE.Mesh(groundGeometry, groundMaterial);
  ground.rotation.x = -Math.PI / 2;
  ground.position.y = -2;
  ground.receiveShadow = true;
  scene.add(ground);

  // Start animation loop
  animate();

  // Handle window resize
  window.addEventListener("resize", onWindowResize);

  console.log("Three.js initialized successfully");
}

function animate() {
  animationId = requestAnimationFrame(animate);
  if (controls) {
    controls.update();
  }
  if (renderer && scene && camera) {
    renderer.render(scene, camera);
  }
}

function onWindowResize() {
  const canvas = document.getElementById("threeCanvas");
  const container = canvas.parentElement;

  camera.aspect = container.clientWidth / container.clientHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(container.clientWidth, container.clientHeight);
}

function create3DShape(shape, color) {
  // Check if Three.js is available
  if (typeof THREE === "undefined" || !scene) {
    console.warn("Three.js not available, skipping 3D shape creation");
    return;
  }

  // Remove existing mesh
  if (currentMesh) {
    scene.remove(currentMesh);
    currentMesh.geometry.dispose();
    currentMesh.material.dispose();
    currentMesh = null;
  }

  // Create material
  const materialColor = new THREE.Color(color);
  const material = new THREE.MeshPhongMaterial({
    color: materialColor,
    shininess: 100,
    specular: new THREE.Color(0x222222),
  });

  let geometry;

  // Use fixed dimensions for all shapes regardless of user input
  switch (shape) {
    case "Round":
      geometry = new THREE.CylinderGeometry(1.2, 1.2, 7, 32);
      currentMesh = new THREE.Mesh(geometry, material);
      currentMesh.rotation.z = Math.PI / 2;
      break;

    case "Square":
      geometry = new THREE.BoxGeometry(2.4, 2.4, 7);
      currentMesh = new THREE.Mesh(geometry, material);
      break;

    case "Rectangle":
      geometry = new THREE.BoxGeometry(4.8, 1.2, 7);
      currentMesh = new THREE.Mesh(geometry, material);
      break;

    case "Hexagonal":
      geometry = new THREE.CylinderGeometry(1.2, 1.2, 7, 6);
      currentMesh = new THREE.Mesh(geometry, material);
      currentMesh.rotation.z = Math.PI / 2;
      break;

    case "Octagonal":
      geometry = new THREE.CylinderGeometry(1.2, 1.2, 7, 8);
      currentMesh = new THREE.Mesh(geometry, material);
      currentMesh.rotation.z = Math.PI / 2;
      break;

    case "Plate":
      geometry = new THREE.BoxGeometry(7, 0.24, 4.8);
      currentMesh = new THREE.Mesh(geometry, material);
      break;

    case "Pipe":
      // Create smooth pipe using CylinderGeometry like Round but hollow
      const outerRadius = 1.2;
      const innerRadius = 0.72;
      const pipeLength = 7;

      // Create pipe using RingGeometry extruded with high curve segments for smoothness
      const pipeShape = new THREE.Shape();
      pipeShape.absarc(0, 0, outerRadius, 0, Math.PI * 2, false);
      const pipeHole = new THREE.Path();
      pipeHole.absarc(0, 0, innerRadius, 0, Math.PI * 2, true);
      pipeShape.holes.push(pipeHole);

      const pipeExtrudeSettings = {
        depth: pipeLength,
        bevelEnabled: false,
        curveSegments: 200, // High curve segments for smooth surface
      };

      geometry = new THREE.ExtrudeGeometry(pipeShape, pipeExtrudeSettings);
      currentMesh = new THREE.Mesh(geometry, material);

      // Center the pipe and rotate to match Round orientation
      currentMesh.position.z = -pipeLength / 2;
      currentMesh.rotation.z = Math.PI / 2;
      break;

    case "Ring":
      // Create ring using RingGeometry and extrude
      const ringShape = new THREE.Shape();
      ringShape.absarc(0, 0, 2.4, 0, Math.PI * 2, false);
      const holePath = new THREE.Path();
      holePath.absarc(0, 0, 1.44, 0, Math.PI * 2, true);
      ringShape.holes.push(holePath);

      const extrudeSettings = {
        depth: 0.72,
        bevelEnabled: false,
        curveSegments: 200, // High curve segments for smooth surface
      };

      geometry = new THREE.ExtrudeGeometry(ringShape, extrudeSettings);
      currentMesh = new THREE.Mesh(geometry, material);
      currentMesh.rotation.x = -Math.PI / 2;
      break;

    default:
      // Default cube
      geometry = new THREE.BoxGeometry(1, 1, 1);
      currentMesh = new THREE.Mesh(geometry, material);
      break;
  }

  if (currentMesh) {
    currentMesh.castShadow = true;
    currentMesh.receiveShadow = true;
    scene.add(currentMesh);

    // Reset camera position for better view
    if (controls) {
      controls.reset();
    }
    camera.position.set(5, 5, 5);
    camera.lookAt(0, 0, 0);
  }
}
