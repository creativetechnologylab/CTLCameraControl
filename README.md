# CTL Camera Control

A small library to control suitable webcams. ** Not to take photos ** but rather to programmatically change settings to do with the camera hardware.

For example, initially built to move a camera like this: 
![Logitech QuickCam Orbit AF](https://images-na.ssl-images-amazon.com/images/I/51tKgg3fQoL._AC_SL1000_.jpg)

## Installation

This library has no dependencies, but the target machine must have the command `uvcdynctrl`. I only found linux to have this command, so Raspberry Pi?

## Usage

This example is a bare minimum to print some text to the printer.

```
const CTLCameraControl = require('../CTLCameraControl');

const camera = new CTLCameraControl();
camera.turnRight()
    .then(() => {
        console.log("Asked camera to turn right");
    });
```

## API

**CTLCameraControl()**

**setSpeed(Number speed)**
- *speed* The speed in which turns and tilts will attempt

**turnLeft(Number speed)**
- *speed* (optional) Overrides the speed
- *@returns Promise*

**turnRight(Number speed)**
- *speed* (optional) Overrides the speed
- *@returns Promise*

**tiltUp(Number speed)**
- *speed* (optional) Overrides the speed
- *@returns Promise*

**tiltDown(Number speed)**
- *speed* (optional) Overrides the speed
- *@returns Promise*

**resetPan()**
- *@returns Promise*

**resetTilt()**
- *@returns Promise*

**reset()**
- *@returns Promise*

**rawCommand(key, value)**
- *key* Command name
- *value* Value to pass to the command
- *@returns Promise*

## Good to know

This library could easily be extended. It has a small subset of commands that can be passed to the webcam, but the list is actually a lot bigger.

Running `uvcdynctrl -c` will display a list of controls available to alter. Then you can pass that control and a value to the `rawCommand()` function

