var vrView;
var imageBase = 'examples/new_demo/';

// The first scene to load
var firstScene = "capture_01"

// All the scenes for the experience
// Hotspot directions are specified via yaw and pitch angles in degrees.
// Positive yaw angles move from the center of the image to the left, negative to the right.
// Positive pitch angles move from the center upward, negative downward.
var scenes = {
    capture_01: {
        hotspots: {
            capture_02: {
                distance: 1,
                pitch: 0,
                radius: 0.05,
                yaw: -90.4611997662752
            },
            capture_03: {
                distance: 1,
                pitch: 0,
                radius: 0.05,
                yaw: -27.148317575224418
            },
            capture_04: {
                distance: 1,
                pitch: 0,
                radius: 0.05,
                yaw: -42.22587826604253
            },
            capture_05: {
                distance: 1,
                pitch: 0,
                radius: 0.05,
                yaw: 81.00300868787099
            },
            capture_11: {
                distance: 1,
                pitch: 0,
                radius: 0.05,
                yaw: -137.84069024564556
            }
        },
        image: imageBase + "images/capture_01.jpg"
    },
    capture_02: {
        hotspots: {
            capture_01: {
                distance: 1,
                pitch: 0,
                radius: 0.05,
                yaw: 89.53880023372481
            },
            capture_03: {
                distance: 1,
                pitch: 0,
                radius: 0.05,
                yaw: 20.435178103171797
            },
            capture_04: {
                distance: 1,
                pitch: 0,
                radius: 0.05,
                yaw: 49.7532803484069
            },
            capture_11: {
                distance: 1,
                pitch: 0,
                radius: 0.05,
                yaw: 170.76595616615197
            }
        },
        image: imageBase + "images/capture_02.jpg"
    },
    capture_03: {
        hotspots: {
            capture_01: {
                distance: 1,
                pitch: 0,
                radius: 0.05,
                yaw: 152.8516824247756
            },
            capture_02: {
                distance: 1,
                pitch: 0,
                radius: 0.05,
                yaw: -159.56482189682822
            },
            capture_04: {
                distance: 1,
                pitch: 0,
                radius: 0.05,
                yaw: 167.28396256271583
            },
            capture_06: {
                distance: 1,
                pitch: 0,
                radius: 0.05,
                yaw: 43.059514539011644
            }
        },
        image: imageBase + "images/capture_03.jpg"
    },
    capture_04: {
        hotspots: {
            capture_01: {
                distance: 1,
                pitch: 0,
                radius: 0.05,
                yaw: 137.7741217339575
            },
            capture_02: {
                distance: 1,
                pitch: 0,
                radius: 0.05,
                yaw: -130.2467196515931
            },
            capture_03: {
                distance: 1,
                pitch: 0,
                radius: 0.05,
                yaw: -12.716037437284157
            },
            capture_05: {
                distance: 1,
                pitch: 0,
                radius: 0.05,
                yaw: 106.47555448589011
            },
            capture_11: {
                distance: 1,
                pitch: 0,
                radius: 0.05,
                yaw: -163.4850946402346
            }
        },
        image: imageBase + "images/capture_04.jpg"
    },
    capture_05: {
        hotspots: {
            capture_01: {
                distance: 1,
                pitch: 0,
                radius: 0.05,
                yaw: -98.99699131212903
            },
            capture_04: {
                distance: 1,
                pitch: 0,
                radius: 0.05,
                yaw: -73.5244455141099
            },
            capture_08: {
                distance: 1,
                pitch: 0,
                radius: 0.05,
                yaw: 72.43489129462164
            },
            capture_10: {
                distance: 1,
                pitch: 0,
                radius: 0.05,
                yaw: 152.34246590015647
            }
        },
        image: imageBase + "images/capture_05.jpg"
    },
    capture_06: {
        hotspots: {
            capture_03: {
                distance: 1,
                pitch: 0,
                radius: 0.05,
                yaw: -136.94048546098836
            },
            capture_07: {
                distance: 1,
                pitch: 0,
                radius: 0.05,
                yaw: 114.57167600080503
            }
        },
        image: imageBase + "images/capture_06.jpg"
    },
    capture_07: {
        hotspots: {
            capture_06: {
                distance: 1,
                pitch: 0,
                radius: 0.05,
                yaw: -65.42832399919497
            },
            capture_08: {
                distance: 1,
                pitch: 0,
                radius: 0.05,
                yaw: 161.38289906139354
            },
            capture_14: {
                distance: 1,
                pitch: 0,
                radius: 0.05,
                yaw: 75.2417571621161
            }
        },
        image: imageBase + "images/capture_07.jpg"
    },
    capture_08: {
        hotspots: {
            capture_05: {
                distance: 1,
                pitch: 0,
                radius: 0.05,
                yaw: -107.56510870537838
            },
            capture_07: {
                distance: 1,
                pitch: 0,
                radius: 0.05,
                yaw: -18.61710093860647
            },
            capture_14: {
                distance: 1,
                pitch: 0,
                radius: 0.05,
                yaw: 27.794351702914298
            }
        },
        image: imageBase + "images/capture_08.jpg"
    },
    capture_09: {
        hotspots: {
            capture_10: {
                distance: 1,
                pitch: 0,
                radius: 0.05,
                yaw: -80.5230318512329
            }
        },
        image: imageBase + "images/capture_09.jpg"
    },
    capture_10: {
        hotspots: {
            capture_05: {
                distance: 1,
                pitch: 0,
                radius: 0.05,
                yaw: -27.657534099843524
            },
            capture_09: {
                distance: 1,
                pitch: 0,
                radius: 0.05,
                yaw: 99.47696814876711
            },
            capture_12: {
                distance: 1,
                pitch: 0,
                radius: 0.05,
                yaw: -144.16938925469216
            }
        },
        image: imageBase + "images/capture_10.jpg"
    },
    capture_11: {
        hotspots: {
            capture_01: {
                distance: 1,
                pitch: 0,
                radius: 0.05,
                yaw: 42.159309754354446
            },
            capture_02: {
                distance: 1,
                pitch: 0,
                radius: 0.05,
                yaw: -9.234043833848018
            },
            capture_04: {
                distance: 1,
                pitch: 0,
                radius: 0.05,
                yaw: 16.51490535976541
            }
        },
        image: imageBase + "images/capture_11.jpg"
    },
    capture_12: {
        hotspots: {
            capture_10: {
                distance: 1,
                pitch: 0,
                radius: 0.05,
                yaw: 35.830610745307844
            }
        },
        image: imageBase + "images/capture_12.jpg"
    },
    capture_13: {
        hotspots: {},
        image: imageBase + "images/capture_13.jpg"
    },
    capture_14: {
        hotspots: {
            capture_07: {
                distance: 1,
                pitch: 0,
                radius: 0.05,
                yaw: -104.75824283788391
            },
            capture_08: {
                distance: 1,
                pitch: 0,
                radius: 0.05,
                yaw: -152.2056482970857
            }
        },
        image: imageBase + "images/capture_14.jpg"
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
  loadScene(firstScene);
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
