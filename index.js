import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import postRoutes from "./routes/posts.js"
import Post from "./models/Post.js";
import Feedback from "./models/Feedback.js";
import GetInTouch from "./models/getInTouch.js";
import Project_Contact from "./models/ProjectContact.js";

const router = express.Router();



// CONFIGURATIONS

// to grab a file url
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/assets", express.static(path.join(__dirname, 'public/assets')));


// FILE STORAGE
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    },
});

const upload = multer({ storage: storage });



// ROUTES WITH FILES

// app.post("/posts", upload.single("picture"), createPost);

// ROUTES


app.post("/submitfeedback", async (req, res) => {

    const { firstname, lastname, phone, email, message } = req.body;

    const feedback = new Feedback({ firstname, lastname, phone, email, message });

    await feedback.save();
    res.status(201).json({ message: " success" })

});


app.post("/submitgetintouch", async (req, res) => {

    const { firstname, lastname, phone, email, message } = req.body;

    const getInTouch = new GetInTouch({ firstname, lastname, phone, email, message });

    await getInTouch.save();
    res.status(201).json({ message: " success" })

});


app.post("/submitprojectcontact", async (req, res) => {

    const { design, development, fullname, email, message } = req.body;

    const projectContact = new Project_Contact({ design, development, fullname, email, message });

    await projectContact.save();
    res.status(201).json({ message: " success" })

});



app.post('/uploadpost', upload.single('image'), async (req, res) => {
    const { title, description, category, subCategory } = req.body;
    const newPost = new Post({
        title,
        description,
        category,
        subCategory,
        image: req.file.filename,
    });
    await newPost.save();
    res.json(newPost);
});


// Mongoose Setup 
mongoose.set("strictQuery", false); //write this to avoid DeprecationWarning:
const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));


}).catch(error => console.log(error + "did not connect "));

