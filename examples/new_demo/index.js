var vrView;
var imageBase = 'examples/new_demo/';

// All the scenes for the experience
var scenes = {
  lobby_counter: {
    image: imageBase + 'lobby_counter.jpg',
    preview: imageBase + 'lobby_counter-preview.jpg',
    hotspots: {
      lobby_inside: {
        pitch: 0,
        yaw: 30,
        radius: 0.05,
        distance: 1
      },
      lobby_doorway: {
        pitch: 0,
        yaw: 90,
        radius: 0.05,
        distance: 1
      }
    }
  },
  lobby_doorway: {
    image: imageBase + 'lobby_doorway.jpg',
    preview: imageBase + 'lobby_doorway-preview.jpg',
    hotspots: {
      lobby_inside: {
        pitch: 0,
        yaw: -15,
        radius: 0.05,
        distance: 1
      },
      lobby_counter: {
        pitch: 0,
        yaw: -85,
        radius: 0.05,
        distance: 1
      }
    }
  },
  lobby_inside: {
    image: imageBase + 'lobby_inside.jpg',
    preview: imageBase + 'lobby_inside-preview.jpg',
    hotspots: {
      lobby_counter: {
        pitch: 0,
        yaw: -155,
        radius: 0.05,
        distance: 1
      },
      lobby_doorway: {
        pitch: 0,
        yaw: 155,
        radius: 0.05,
        distance: 1
      }
    }
  }
};

function init() {
  console.log('init???');
}

function onLoad() {
  console.log('onLoad');
  vrView = new VRView.Player('#vrview', {
    image: imageBase + 'blank.png',
    preview: imageBase + 'blank.png',
    is_stereo: true,
    is_autopan_off: true
  });

  vrView.on('ready', onVRViewReady);
  vrView.on('modechange', onModeChange);
  vrView.on('click', onHotspotClick);
  vrView.on('error', onVRViewError);
}

function onVRViewReady(e) {
  console.log('onVRViewReady');
  loadScene('lobby_inside');

/* could never get this to work - where do I find the camera and scene?
  console.log('starting ambient audio');
  var camera = new THREE.Camera();
  scene.add(camera);
  var listener = new THREE.AudioListener();
  camera.add( listener );
  var audioLoader = new THREE.AudioLoader();
  var sound4 = new THREE.Audio( listener );
  audioLoader.load( imageBase + 'ambient.ogg', function( buffer ) {
    sound4.setBuffer( buffer );
    sound4.setLoop(true);
    sound4.setVolume(0.5);
    sound4.play();
  });
*/
}

function onModeChange(e) {
  console.log('onModeChange', e.mode);
}

function onHotspotClick(e) {
  console.log('onHotspotClick', e.id);
  loadScene(e.id);
}

function loadScene(id) {
  console.log('loadScene', id);

  // Set the image
  vrView.setContent({
    image: scenes[id].image,
    preview: scenes[id].preview,
    is_stereo: true,
    is_autopan_off: true
  });

  // Add all the hotspots for the scene
  var newScene = scenes[id];
  var sceneHotspots = Object.keys(newScene.hotspots);
  for (var i = 0; i < sceneHotspots.length; i++) {
    var hotspotKey = sceneHotspots[i];
    var hotspot = newScene.hotspots[hotspotKey];

    vrView.addHotspot(hotspotKey, {
      pitch: hotspot.pitch,
      yaw: hotspot.yaw,
      radius: hotspot.radius,
      distance: hotspot.distance
    });
  }
}

function onVRViewError(e) {
  console.log('Error! %s', e.message);
}

window.addEventListener('load', onLoad);
