import express from 'express';
import cors from 'cors';
import mongoose from "mongoose";
import HelloController
  from "./controllers/hello-controller.js";
import UserController
  from "./controllers/users/users-controller.js";
import TuitsController
  from "./controllers/tuits/tuits-controller.js";

const CONNECTION_STRING = `mongodb+srv://johnmerlino1235:secretpassword@cluster0.wmttjtg.mongodb.net/?retryWrites=true&w=majority` || 'mongodb://localhost:27017/tuiter';
const app = express();
app.use(cors());
app.use(express.json());
TuitsController(app);
HelloController(app);
UserController(app);
app.listen(process.env.PORT || 4000);
mongoose.connect(CONNECTION_STRING);
