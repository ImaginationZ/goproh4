var GoPro = require('../lib/index.js');

var cam = new GoPro.Camera();

// Stop recording
console.log('[video]', 'stopped')
cam.stop()

