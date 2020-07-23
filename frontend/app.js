import { resizeCanvas, renderShape, refresh, renderFullScreenImage } from "./canvas.js"
import Chatbox from "./Chatbox.js"
import Uploader from "./Uploader.js"

const settings = document.getElementById('settings')
const menu = document.getElementById('menu')
const chatbox = document.getElementById('chatbox')
const input = document.getElementById('chat')
const form = document.getElementById('messenger')
const upload = document.getElementById('upload')
const mapUpload = document.getElementById('map-upload')

const chat = new Chatbox(chatbox)
const uploader = new Uploader(upload)

settings.addEventListener('click', _ => {
  menu.classList.toggle('hidden')
})

form.addEventListener('submit', _ => {
  const msg = input.value
  form.reset()
  chat.send(msg)
})

mapUpload.addEventListener('click', _ => upload.click())

window.addEventListener('resize', _ => {
  resizeCanvas()
  uploader.refresh()
})

function init () {
  resizeCanvas()
  loop()
}

function loop() {
  requestAnimationFrame(loop)
}

init()
