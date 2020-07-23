import { renderFullScreenImage } from "./canvas.js"
import axios from "axios"

function Uploader (input) {
  this.bg = undefined;

  input.addEventListener('change', e => {
    const reader = new FileReader()
    reader.addEventListener('load', e => {
      const img = new Image()
      img.onload = function() {
        renderFullScreenImage(this)
      }
      // console.log(e.target.result)
      img.src = e.target.result;
      this.bg = e.target.result;
    })
      
    const img = e.target.files[0];
    reader.readAsDataURL(img);
    const fd = new FormData()
    fd.append('photos', img, e.target.value)
    axios
      .post('/upload', fd)
      .then(res => console.log(res.statusText))
      .catch(err => console.log('error during upload', err))
  })
  this.input = input;
}

Uploader.prototype.refresh = function () {
  if (!this.bg) return;
  const img = new Image();
  img.onload = function() {
    renderFullScreenImage(this);
  }
  img.src = this.bg;
}

export default Uploader;
