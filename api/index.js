import express from 'express';
import postRoure from './routes/posts.js';
import userRoure from './routes/users.js';
import authRoure from './routes/auths.js';

const app = express()

app.use(express.json())
app.use("/api/posts", postRoure)
app.use("/api/user", userRoure)
app.use("/api/auth", authRoure)



app.listen(8800, () => {
  console.log('Server is running on port 8800');
});