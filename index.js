import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import passport from "passport";
import dotenv from 'dotenv'
import passportConfig from "./config/passport.js";

dotenv.config()

import postRoutes from './routes/posts.js';
import users from "./routes/users.js";

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

// Routes
app.use("/api/users", users);
app.use('/api/posts', postRoutes);

app.get('/test', (req, res) => {
  res.json({success: 'App is working fine!'})
})

app.use(passport.initialize());

// Passport config
passportConfig(passport)

app.use(cors());

const CONNECTION_URL = process.env.DB_CONNECTION;
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

// mongoose.set('useFindAndModify', false);