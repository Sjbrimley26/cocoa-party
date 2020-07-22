import { resizeCanvas, renderShape, refresh } from "./canvas.js"

function init () {
  resizeCanvas();
  loop();
}

function loop() {
  resizeCanvas();
  refresh();
  requestAnimationFrame(loop);
}

init();
