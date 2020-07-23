import express from "express"
import path from "path"
import http from "http"
import socket from "socket.io" 
import multer from "multer"
import * as sjb from "sjb-utils"

const { Random } = sjb
const __dirname = path.resolve()

const app = express()
const server = http.createServer(app)
const io = socket(server)

const storage = multer.diskStorage({
  destination: function (req, res, next) {
    next(null, path.join(__dirname, './uploads'))
  },

  filename: function (req, file, next) {
    const fileExtension = path.extname(file.originalname).split('.')[1];
    next(null, Random.chain() + '.' + fileExtension)
  }
})

const upload = multer({ storage })

app.use(express.static(path.join(__dirname, './public')))
app.use('uploads', express.static(path.join(__dirname, './uploads')))

app.post('/upload', upload.array('photos'), function (req, res) {
  res.sendStatus(200)
})

app.listen(3000, () => console.log('now listening on port 3000'))
