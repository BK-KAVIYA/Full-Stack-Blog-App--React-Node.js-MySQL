import express from 'express';
import postRoure from './routes/posts.js';
import userRoure from './routes/users.js';
import authRoure from './routes/auths.js';
import cookieParser from 'cookie-parser';

const app = express()


app.use(express.json())
app.use(cookieParser())
app.use("/api/posts", postRoure)
app.use("/api/user", userRoure)
app.use("/api/auth", authRoure)



app.listen(5000, () => {
  console.log('Server is running on port 5000');
});

