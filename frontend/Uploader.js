import { renderFullScreenImage } from "./canvas.js"
import axios from "axios"

function Uploader (input) {
    input.addEventListener('change', e => {
        const reader = new FileReader()
        reader.addEventListener('load', e => {
          const img = new Image()
          img.onload = function() {
            renderFullScreenImage(this)
          }
          // console.log(e.target.result)
          img.src = e.target.result;
        })
      
        const img = e.target.files[0];
        reader.readAsDataURL(img);
    })
    this.input = input;
}

export default Uploader;
