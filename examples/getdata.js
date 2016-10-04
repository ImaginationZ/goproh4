var GoPro = require('../lib/index.js');

var cam = new GoPro.Camera();

var i = 0;
var re = /(?:\.([^.]+))?$/;

/*
**  List all the media
*/
cam.listMedia().then(function (result) {

    /*
    **  For each directory the camera has
    **  I haven't seen more than one
    */
    result.media.forEach(function (directory) {

        console.log('[directory] =', directory.d);

        /*
        **  For each file in this directory
        */
        directory.fs.forEach(function (file) {

	    var ext = re.exec(file.n)[1];
	    var name = '/home/hao/Downloads/' + i.toString() + '.' + ext;

	    	    console.log(name);

	    cam.getMedia(directory.d, file.n, name);

            console.log('[url] = ', 'http://' + cam._ip + '/videos/DCIM/' + directory.d + '/' + file.n);
	    i++;
        });
    });
});
