(function () {
  // utility functions
  var randRange = function(min, max) {
    return Math.floor(Math.random()*(max-min)) + min;
  }
  var map = function(n, start1, stop1, start2, stop2) {
    return ((n-start1)/(stop1-start1))*(stop2-start2)+start2;
  };
  
  var mapVelocity = function (velocity) {return map(velocity, 0, 1, 20, 60)};

  var fixedLength = false;
  var MOBILE_WIDTH = 700; 
  
  var urlParams = new URLSearchParams(window.location.search);
  var voice = urlParams.get('voice');
  if (!!voice) {
    fixedLength = false;
  }

  var MOUSE_CONTROL = false;

  var NOTE_LENGTH = 0.7;
  var ANIMATION_TIME = 3.0;
  var OUTPUT_AUDIO = true

  var sampleSelected = 'ORGAN'; 
  
  var paramSet = 0
  var params = [
  {
    x: 0.05227467811158796,
    y: 0.05744431418522861
  }, {
    x: .2618025751072961,
    y: 0.08366013071895424
  }, {
    x: 0.5507868383404864,
    y: 0.4856711915535445
  }, {
    x: 0.821173104434907,
    y: 0.9215686274509803
  }
  ]
  
  var px = params[paramSet].x
  var py = params[paramSet].y
  
  
  var setBezierParams = () => {
    px = params[paramSet].x
    py = params[paramSet].y
  }
  
  var svg = document.querySelector('.svg')
  
  var generatePoints = function(num, offsetX) {
    var scaleX = window.innerHeight / 88
    var scaleY = (window.innerHeight / (num));
    var points = []
    for (var i=0; i<num; i++) {
      var dir = Math.random() < 0.5 ? -1 : 1;
      var offsetFactorX = randRange(0, 300) * px;
      var x = offsetX + dir * 0.20 * (i) * offsetFactorX;
      var offsetY =  scaleY*0.6;
      var y = window.innerHeight - (i * scaleY) + (Math.random() * offsetY);
      points.push([x, y])
    }
    points.push([offsetX, -10])
    return points
  }
  
  var getAnimationTimeForParam = function(param) {
    if (param === 0) {
      return '6s'
    } else if (param === 1) {
      return '7s'
    } else if (param === 2){
      return '10s'
    } else if (param === 3) {
      return '11s'
    }
  }
    
  var createSVGPath = function(key, path, animation, id, velocity) {
      var newPath = document.createElementNS("http://www.w3.org/2000/svg","path");
      newPath.setAttributeNS(null, "class", animation);
      newPath.setAttributeNS(null, "id", id);
      newPath.setAttributeNS(null, "d", path);
      newPath.setAttributeNS(null, "data-velocity", velocity);

      var color = keyColors[key]
      var len = newPath.getTotalLength()
      var path_offset = len
      var start = len
      var initial = len
      var segment_length = len
      var end = len*2

      newPath.setAttributeNS(null, 'style',
        `--stroke: ${color};
        --stroke-width: ${mapVelocity(velocity)};
        --offset: ${path_offset};
        --start: ${start};
        --end: ${end};
        --initial: ${initial};
        --timeout: ${getAnimationTimeForParam(paramSet)};
        --segment_length: ${segment_length}`)

      return newPath
  }

  var keyCounters = {}

  var addKeyCount = function(key) {
    if (keyCounters.hasOwnProperty(key)) {
      keyCounters[key] += 1
    } else {
      keyCounters[key] = 1;
    }
    return keyCounters[key]
  }

  var startNoteAnimation = function(midi, id, velocity) {
    var steps = window.innerWidth/65
    // where do the notes appear?    
    var points = generatePoints(7,  ((midi) - 30) * steps)
    var d = svgPath(points, bezierCommand)
    var path = createSVGPath(midi, d, 'animating', midi + '_' + id, velocity);
    svg.appendChild(path);
  }
  
  var endAllAnimations = function() {
    var animating = [...document.querySelectorAll('.animating')];
    animating.forEach(path => {
      var midi = path.id.split('_')[0];
      var id = path.id.split('_')[1]
      endNoteAnimation(midi, id);
    });
  }

  var endNoteAnimation = function(midi, id) {
    var path = document.getElementById(midi + '_' + id)
    if (!path) {
      return
    }
    if (path.classList.contains('animatingEnd')) {
      return;
    }
    var matrix = getComputedStyle(path).getPropertyValue('stroke-dasharray')
    var velocity = getComputedStyle(path).getPropertyValue('stroke-width')
    var dashArrayStart = parseFloat(matrix.split('px')[0], 10)

    var len = path.getTotalLength()
    var color = keyColors[midi]
    var path_offset = len*2
    var start = len
    var initial = len
    var segment_length = dashArrayStart - len
    var end = len + len + segment_length

    path.setAttributeNS(null, 'style',
      `--stroke: ${color};
      --stroke-width: ${velocity};
      --offset: ${path_offset};
      --start: ${start};
      --end: ${end};
      --initial: ${initial};
      --start_midway: ${(start + end)/2};
      --timeout2: ${(fixedLength ? '1.5s' : '2s')};
      --segment_length: ${segment_length}`)
    path.setAttributeNS(null, 'class', 'animatingEnd')

    setTimeout(function() {
        svg.removeChild(path)
    }, 1000 * ANIMATION_TIME)
  }

  var keyColors = [];

  var setKeyColors = function() {
      var min = 0;
      var max = 160;
      var startingHue = randRange(0, 256)

      for (var i=min; i<max+1; i++) {
          keyColors.push(map(i, startingHue + min, startingHue + max, 0, 1000))%256
      }
  }


  var upper = [81,50,87,51,69,82,53,84,54,89,55,85,73,57,79,48,80,219,187,221]
  var lower = [90,83,88,68,67,86,71,66,72,78,74,77,188,76,190,186,191]
  var keysPressed = {}

  var playFixedLengthMidi = function(midi, velocity) {
    var id = addKeyCount(midi)
    startNoteAnimation(midi, id, velocity)
    if (OUTPUT_AUDIO) {
      startWaveTableNow(midi, velocity)
    }
    setTimeout(function() {
      endNoteAnimation(midi, id);
    }, NOTE_LENGTH/(4 * (py*3 + 1)) * 1000)
  }

  var keyEnvelopes = {}

  var startMidi = function(midiNote, velocity) {
    if (keyEnvelopes[midiNote] !== undefined) {
      endMidi(midiNote)
    }
    keyEnvelopes[midiNote] = {
      envelope: player.queueWaveTable(audioContext, audioContext.destination, selectedPreset, audioContext.currentTime + 0.02, midiNote, 999, velocity),
    }
  }

  var endMidi = function(midiNote) {
    if (!!keyEnvelopes[midiNote]) {
      if (keyEnvelopes[midiNote].envelope) {
        keyEnvelopes[midiNote].envelope.cancel();
        keyEnvelopes[midiNote].envelope=null;
      }
    }
  }

  var controlsActive = true;
  var init = function () {
    var modifierKeys = [91, 93, 18, 16, 17];
    
    document.addEventListener('keydown', function(e) {
      var key = e.which;
      var up = upper.indexOf(key)
      var low = lower.indexOf(key)
      
      if (key === 32) {
        controlsActive = !controlsActive;
        if (!controlsActive) {
          document.querySelectorAll('.mode-button-wrapper')[0].classList.add('inactive') 
        } else {
          document.querySelectorAll('.mode-button-wrapper')[0].classList.remove('inactive') 
        }
        if (MOUSE_CONTROL) {
          toggleMouseControl()
        }
      }
      
      if (key === 27) {
        document.querySelectorAll('.instructions-wrapper')[0].classList.add('inactive');
      }
      // detect modifiers so Shift+Key does not start audio
      if (modifierKeys.indexOf(key) !== -1) {
        keysPressed[key] = true
      }
      for (var i=0; i<modifierKeys.length; i++) {
        if (!!keysPressed[modifierKeys[i]]) {
          if (up !== -1 || low !== -1) {
            document.querySelectorAll('.modifier')[0].classList.add('active')
          }
          return
        }       
      }
    
      if (fixedLength) {
        var midi = up + 60
        if (up === -1) {
          midi = low + 48;
        }
        if (up === -1 && low === -1) {
          return
        }
        playFixedLengthMidi(midi, 0.6)
      } else {
        if (up !== -1 && !keysPressed[key]) {
            var midi = up + 60
            if (sampleSelected === 'VOICE') {
              midi = up + 48
            }
            keysPressed[key] = true
            var id = addKeyCount(midi)
            startMidi(midi)
            startNoteAnimation(midi, id, 0.7)
        } else if (low !== -1 && !keysPressed[key]) {
            var midi = low + 48
            if (sampleSelected === 'VOICE') {
              midi = low + 36
            } 
            keysPressed[key] = true
            var id = addKeyCount(midi)
            startMidi(midi, 0.9)
            startNoteAnimation(midi, id, 0.7)
        }
      }
      document.querySelectorAll('.modifier')[0].classList.remove('active')
    });

    document.addEventListener('keyup', function(e) {
        var key = e.which;
        if (modifierKeys.indexOf(key) !== -1) {
          keysPressed[key] = false
        }
        var up = upper.indexOf(key)
        var low = lower.indexOf(key)
        if (up !== -1) {
            var midi = up + 60
            keysPressed[key] = false
            if (!fixedLength) {     
              if (sampleSelected === 'VOICE') {
                midi = up + 48
              }
              endMidi(midi)
              var id = keyCounters[midi]
              endNoteAnimation(midi, id)
            }
        }
        if (low !== -1) {
            var midi = low + 48
            keysPressed[key] = false
            if (!fixedLength) {
              if (sampleSelected === 'VOICE') {
                midi = low + 36
              }
              endMidi(midi)
              var id = keyCounters[midi]
              endNoteAnimation(midi, id)
            }
        }
    });
  
    var lastMouseX, lastMouseY;
    document.addEventListener('mousemove', function(e) {
      lastMouseX = e.clientX;
      lastMouseY = e.clientY;
      if (MOUSE_CONTROL) {
        py = 1 - ((lastMouseY)/ window.innerHeight);
        px = ((lastMouseX)/ window.innerWidth);
      }
    });
    
    var hideInstructions = function(e) {
      document.querySelectorAll('.instructions-wrapper')[0].classList.add('inactive');
    }
    
    document.querySelectorAll('.instructions-content')[0].addEventListener('click', hideInstructions);
    
    var showAbout = function(e) {
      document.querySelectorAll('.instructions-wrapper')[0].classList.add('inactive');
      document.querySelectorAll('.about-wrapper')[0].classList.remove('inactive');
    }
    document.querySelectorAll('.about-button')[0].addEventListener('click', showAbout);
    
    var showHelp = function(e) {
      document.querySelectorAll('.instructions-wrapper')[0].classList.remove('inactive');
      document.querySelectorAll('.about-wrapper')[0].classList.add('inactive');
    }
    document.querySelectorAll('.help-button')[0].addEventListener('click', showHelp);
    document.querySelectorAll('.about-back-button')[0].addEventListener('click', showHelp);
    
    var modeButtons = document.querySelectorAll('.mode-button')
    var selectModeButton = function(e) {
       var id = e.target.id;
       var buttons = [...modeButtons]
       buttons.forEach(button => {button.classList.remove('active')});

       document.querySelectorAll(`#${id}`)[0].classList.add('active');
       if (id === 'vox') {
          selectedPreset = _tone_0530_Aspirin_sf2_file; // ooos
          sampleSelected = 'VOICE';
          fixedLength = false;
          playAHDSR()
       } else if (id === 'vibes') {
          selectedPreset = _tone_0110_FluidR3_GM_sf2_file; // vibes
          sampleSelected = 'VIBES';
          fixedLength = true;  
       } else if (id === 'organ') {
          selectedPreset=_tone_0161_SoundBlasterOld_sf2; // organ     
          sampleSelected = 'ORGAN';
          fixedLength = false;
          playAHDSR()
       }
     }
    
    modeButtons.forEach(function(mode) {
      mode.addEventListener('click', selectModeButton);  
    })
    
    var bezierModeButtons = document.querySelectorAll('.bezier-mode-button')
    var selectBezierMode = function(e) {
       var id = e.target.id;
       var buttons = [...bezierModeButtons]
       buttons.forEach(function(button) {button.classList.remove('active')});
       document.querySelectorAll(`#${id}`)[0].classList.add('active');
       if (id === 'bezier0') {
          paramSet = 0
          setBezierParams()
       } else if (id === 'bezier1') {
          paramSet = 1
          setBezierParams()
       } else if (id === 'bezier2') {
          paramSet = 2 
          setBezierParams()
       } else if (id === 'bezier3') {
          paramSet = 3
          setBezierParams()
       }
     }
    bezierModeButtons.forEach(function(mode) {
      mode.addEventListener('click', selectBezierMode);  
    })
    
    // add mouse click to get things un-stuck
    var getUnstuck = function() {
      modifierKeys.forEach(function(key) {
        keysPressed[key] = false;
      });
      document.querySelectorAll('.modifier')[0].classList.remove('active')
      
      for (var midinote of Object.keys(keyEnvelopes)) {
        if (keyEnvelopes[midinote].envelope) {
          keyEnvelopes[midinote].envelope.cancel();
          keyEnvelopes[midinote].envelope=null;
        }
      }
      endAllAnimations();
    }
    
    document.addEventListener('click', getUnstuck);
    
    var toggleMouseControl = function() {
      if (MOUSE_CONTROL) {
        MOUSE_CONTROL = false;
      } else {
        MOUSE_CONTROL = true;
      }
    }
    
    // midi listener
    var connected = [];
    
    var getDeviceById = function(id){
      const index = connected.findIndex(d => d.id === id)
      return connected[index]
    }
    
    var removeDevice = function(id) {
      const index = connected.findIndex(d => d.id === id)
      connected.splice(index, 1)
    }
    
    var addMidiListerner = function(inputDevice) {
      var device = WebMidi.getInputById(inputDevice.id);
      connected.push(device)
      device.addListener('noteon', "all", function(e) {
          var midi = e.note.number
          if (fixedLength) {
            playFixedLengthMidi(midi, (e.velocity)*0.7)
          } else {
            var id = addKeyCount(midi)
            startNoteAnimation(midi, id, 0.7)
            if (OUTPUT_AUDIO) {
              startMidi(midi, 0.7)
            }
          }
        }
      );

      device.addListener('noteoff', "all", function(e) {
          if (!fixedLength) {
            var midi = e.note.number;
            if (OUTPUT_AUDIO) {
              endMidi(midi)
            }
            var id = keyCounters[midi]
            endNoteAnimation(midi, id)
          }
        }
      );
    }
    
    WebMidi.enable(function(err) {
      if (!err){
        setTimeout(function() {
          if (WebMidi.inputs) {
            WebMidi.inputs.forEach(function(input) {
              addMidiListerner(input)
            })
          }
          WebMidi.addListener('connected', function(connectedDevice) {
            var device = connectedDevice
            if (connectedDevice.port) {
              device = connectedDevice.port
            }
            if (device.type === 'input') {
              addMidiListerner(device)
            }
          })

          WebMidi.addListener('disconnected', function(disconnected) {
            var device = getDeviceById(disconnected.id)
            if (disconnected.port) {
              device = getDeviceById(disconnected.port.id)
            }
            if (device){
              device.removeListener('noteon')
              device.removeListener('noteoff')
              removeDevice(disconnected.id)
            }
          })
        }, 100)
      }
    })
  }

  var selectedPreset, audioContext, player;
  
    function playAHDSR() {
      if (sampleSelected === 'ORGAN') {
        for (var i = 0; i < selectedPreset.zones.length; i++) {
          selectedPreset.zones[i].ahdsr = [{
              duration: NOTE_LENGTH,
              volume: 1.0
            }
          ];
        }
      } else if (sampleSelected === 'VOICE') {
        for (var i = 0; i < selectedPreset.zones.length; i++) {
          selectedPreset.zones[i].ahdsr = [{
              duration: 0,
              volume: 0.9
            }, {
              duration: NOTE_LENGTH/5,
              volume: 0.7
            }, {
              duration: NOTE_LENGTH/5,
              volume: 0.6
            }, {
              duration: NOTE_LENGTH/5,
              volume: 0.4
            }, {
              duration: NOTE_LENGTH/5,
              volume: 0.3
            }, {
              duration: NOTE_LENGTH/5,
              volume: 0.2
            }
          ];
        }
      }
    }
    function playFixedAHDSR() {
      for (var i = 0; i < selectedPreset.zones.length; i++) {
        selectedPreset.zones[i].ahdsr = [{
            duration: 0,
            volume: 0.6
          }, {
            duration: NOTE_LENGTH/10,
            volume: 0.6
          }, {
            duration: NOTE_LENGTH/10,
            volume: 0.6
          }, {
            duration: NOTE_LENGTH/10,
            volume: 0.6
          }, {
            duration: NOTE_LENGTH/10,
            volume: 0.6
          }, {
            duration: NOTE_LENGTH/10,
            volume: 0.6
          }, {
            duration: NOTE_LENGTH/10,
            volume: 0.6
          }, {
            duration: NOTE_LENGTH/10,
            volume: 0.6
          }, {
            duration: NOTE_LENGTH/10,
            volume: 0.4
          }, {
            duration: NOTE_LENGTH/10,
            volume: 0.3
          }, {
            duration: NOTE_LENGTH/10,
            volume: 0.2
          }
        ];
      }
    }
  
  var started = false;
  document.addEventListener('touchstart', function(e) {
    if (!started) {
      start();
    }
  });
  
  document.querySelectorAll('svg')[0].addEventListener('touchstart', function(e) {
    if (window.innerWidth < MOBILE_WIDTH) {
      var midinote = Math.floor(map(e.pageX, 0, window.innerWidth, 30, 95));
      playFixedLengthMidi(midinote, 0.7)   
    }
  })

  document.addEventListener('mousemove', function() {
    if (!started) {
      start();
    }
  });

  var start = function() {
      started = true;
      selectedPreset = _tone_0161_SoundBlasterOld_sf2;
      var AudioContextFunc = window.AudioContext || window.webkitAudioContext;
      audioContext = new AudioContextFunc();
      player = new WebAudioFontPlayer();
      if (fixedLength) {
        playFixedAHDSR()
      } else {
        playAHDSR()
      }
      player.adjustPreset(audioContext,selectedPreset);
      
      window.startWaveTableNow = function(pitch, velocity) {
          player.queueWaveTable(audioContext, audioContext.destination, selectedPreset, audioContext.currentTime + 0.02, pitch, NOTE_LENGTH, velocity);
      }
      setKeyColors();
      init();
  }

  
  // referenced this guide to get started w/ SVG beziers https://medium.com/@francoisromain/smooth-a-svg-path-with-cubic-bezier-curves-e37b49d46c74
  
  var svgPath = (points, command) => {
    var d = points.reduce((acc, point, i, a) => i === 0
      ? `M ${point[0]},${point[1]}`
      : `${acc} ${command(point, i, a)}`
    , '')
    return d
  }

  var line = (pointA, pointB) => {
    var lengthX = pointB[0] - pointA[0]
    var lengthY = pointB[1] - pointA[1]
    return {
      length: Math.sqrt(Math.pow(lengthX, 2) + Math.pow(lengthY, 2)),
      angle: Math.atan2(lengthY, lengthX)
    }
  }

  var lineCommand = point => `L ${point[0]} ${point[1]}`

  var controlPoint = (current, previous, next, reverse) => {
    var p = previous || current
    var n = next || current
    // The smoothing ratio
    var smoothing = 2 * py;
    // Properties of the opposed-line
    var o = line(p, n)
    // If is end-control-point, add PI to the angle to go backward
    var angle = o.angle + (reverse ? Math.PI : 0)
    var length = o.length * smoothing
    // The control point position is relative to the current point
    var x = current[0] + Math.cos(angle) * length
    var y = current[1] + Math.sin(angle) * length
    return [x, y]
  }

  var bezierCommand = (point, i, a) => {
    var [cpsX, cpsY] = controlPoint(a[i - 1], a[i - 2], point)
    var [cpeX, cpeY] = controlPoint(point, a[i - 1], a[i + 1], true)
    return `C ${cpsX},${cpsY} ${cpeX},${cpeY} ${point[0]},${point[1]}`
  }

})()
