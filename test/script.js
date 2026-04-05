const canvas = document.getElementById('canvas');
const canvascontext = canvas.getContext('2d');
const pacmanFrames = document.getElementById('animations');
const ghostFrames = document.getElementById('ghosts');

let createRect = (x, y, width, height, color) => {
    canvascontext.fillStyle = color;
    canvascontext.fillRect(x, y, width, height);
}   