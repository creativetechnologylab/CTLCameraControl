const CTLCameraControl = require('../CTLCameraControl/CTLCameraControl');

// A helper function to delay
function delay(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(), time);
    });
}

const camera = new CTLCameraControl();

camera.setSpeed(500);

camera.turnLeft()
    .then(() => delay(1000))
    .then(() => camera.turnRight())
    .then(() => delay(1000))
    .then(() => camera.reset());