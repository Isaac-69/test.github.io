
let scene, camera, renderer, stars, starGeo;

function init() {


  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(50,window.innerWidth / window.innerHeight, 1, 1180);
  camera.position.z = 1;
  camera.rotation.x = Math.PI/2;

  particles = document.getElementById( 'particle' );
  document.body.appendChild(particles);

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);


  starGeo = new THREE.Geometry();
  for(let i=0;i<6000;i++) {
    star = new THREE.Vector3(
      Math.random() * 700 - 300,
      Math.random() * 700 - 300,
      Math.random() * 700 - 300
    );
    star.velocity = 0;
    star.acceleration = 0.001;
    starGeo.vertices.push(star);
  }


  let sprite = new THREE.TextureLoader().load( 'http://i.imgur.com/cTALZ.png' );
  let starMaterial = new THREE.PointsMaterial({
    color: 0xaaaaaa,
    size: 0.9,
    map: sprite
  });

  stars = new THREE.Points(starGeo,starMaterial);
  scene.add(stars);

  window.addEventListener("resize", onWindowResize, false);


  animate(); 
}
function onWindowResize() {
  console.log(window.innerWidth)
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }
function animate() {
  starGeo.vertices.forEach(p => {
    p.velocity += p.acceleration
    p.y -= p.velocity;
    
    if (p.y < -200) {
      p.y = 200;
      p.velocity = 0;
    }
  });
  starGeo.verticesNeedUpdate = true;
  stars.rotation.y +=0.002;

  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}
init();
