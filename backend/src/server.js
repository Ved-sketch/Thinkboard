import express from 'express';
import notesRoutes from "./routes/notesRoutes.js";
import {connectDB} from "./config/db.js"
import dotenv from "dotenv"
import rateLimiter from './middleware/rateLimiter.js';
import cors from "cors"
import path from 'path';

dotenv.config();

const port = process.env.PORT || 5001; 
const app = express();
const _dirname = path.resolve();

//middleware
if (process.env.NODE_ENV === 'development') {
  app.use(cors({
    origin: "http://localhost:5173",
  }));
}
app.use(express.json())
app.use(rateLimiter) 

// custom middleware
// app.use((req,res,next) =>{
//   console.log("We just got a new request!");
//   next();
// });


app.use("/api/notes", notesRoutes);

app.use(express.static(path.join(_dirname, '../frontend/dist')));

if (process.env.NODE_ENV === 'production') { 
    app.get('*', (req, res) => {
    res.sendFile(path.join(_dirname, '../frontend', 'dist', 'index.html'));
  });
}

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
})
