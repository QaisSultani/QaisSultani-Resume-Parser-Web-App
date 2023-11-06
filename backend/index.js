const express = require('express')
const cors = require('cors')
const multer = require('multer')
const fs = require('fs')
const connectDB = require('./db')
const User = require('./db/User')

const app = express()
const upload = multer({ dest: 'uploads/' })

app.use(cors())
app.use(express.json())
connectDB()

const affindaApi = require('./src/affinda')
const encryptPassword = require('./src/encryptPassword')
const comparePasswords = require('./src/comparePasswords')

app.get('/', (req, res) => {
  res.send('app is working...')
})

app.post('/signin', async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })
  // console.log(user.cv.result.data)
  if (user) {
    const match = await comparePasswords(password, user.password)
    match ? res.send(user.id) : res.send()
  }
  else {
    res.send()
  }
})

app.post('/signup', upload.single('cv'), async (req, res) => {
  const { fullName, email } = req.body
  // console.log(req.body)
  const password = await encryptPassword(req.body.password)
  // const readStream = fs.createReadStream(req.file.path)
  // const cv = await affindaApi(readStream)

  ////////// CV:CV.RESULT MUST BE ADDED TO THE USER FIRST ///////////////
  ////////// CV:CV.RESULT MUST BE ADDED TO THE USER FIRST ///////////////
  ////////// CV:CV.RESULT MUST BE ADDED TO THE USER FIRST ///////////////
  ////////// CV:CV.RESULT MUST BE ADDED TO THE USER FIRST ///////////////
  ////////// CV:CV.RESULT MUST BE ADDED TO THE USER FIRST ///////////////
  const user = new User({ fullName, email, password })
  user.save()
  res.send({
    fullName,
    email,
    // cv: cv.result,
  })
})

// app.post('/affinda', upload.single('file'), (req, res) => {
//   // console.log('req.body: ', req.file)
//   if (req.file) {
//     const readStream = fs.createReadStream(req.file.path)
//     // console.log(readStream)
//     affindaApi(readStream)
//       .then(result => res.send(result))
//       .catch(error => res.send(error))
//     // console.log(`File ${req.file.originalname} uploaded successfully!`)
//     // res.status(200).send('File uploaded successfully!')
//   } else {
//     console.error('Failed to upload file.')
//     res.status(400).send('Failed to upload file.')
//   }
//   // console.log("req.data: ", req.data)
//   // console.log("req.query: ", req.query)
//   // console.log("req.file: ", req.file)
//   // res.send('parser is working...')
// })

app.listen(5000, () => console.log('Server Started!!!'))
