import express from 'express';
import postRoure from './routes/posts.js';
import userRoure from './routes/users.js';
import authRoure from './routes/auths.js';
import cookieParser from 'cookie-parser';
import multer from 'multer';

const app = express()


app.use(express.json())
app.use(cookieParser())

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../client/public/upload/')
  },
  filename: function (req, file, cb) {
    cb(null,Date.now()+file.originalname)
  }
})

const upload = multer({ storage })

app.post('/api/upload', upload.single('file'), function (req, res) {
  const file = req.file
  res.status(200).json(file.filename)
})

app.use("/api/posts", postRoure)
app.use("/api/user", userRoure)
app.use("/api/auth", authRoure)



app.listen(5000, () => {
  console.log('Server is running on port 5000');
});

