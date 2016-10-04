var GoPro = require('../lib/index.js');

var cam = new GoPro.Camera();

// Set camera mode
cam.mode(GoPro.Settings.Modes.Video, GoPro.Settings.Submodes.Video.Video)

// Set camera resolution
.then(function () {
    return cam.set(GoPro.Settings.VIDEO_RESOLUTION, GoPro.Settings.VideoResolution.R4K)
})

// Set camera framerate
.then(function () {
    return cam.set(GoPro.Settings.VIDEO_FPS, GoPro.Settings.VideoFPS.F30)
})
