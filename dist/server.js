import express from 'express';
import path from 'path';
import url from 'url';
import mongoose from 'mongoose';
import Message from './models/message.js';
import dotenv from 'dotenv';
dotenv.config();
// Declare the constants we will need
const PORT = process.env.PORT;
const runningMessage = `Listening for requests on port ${PORT}`;
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.join(__dirname, '..'); //gets the root of the project
const MONGOURL = process.env.MONGOURL;
const app = express();
// Connect to mongodb
mongoose.connect(MONGOURL).then(_result => {
    app.listen(PORT, () => console.log(runningMessage));
}).catch(error => {
    console.log(error);
});
app.set('view engine', 'ejs');
// Serve static files
app.use(express.static(path.join(ROOT, 'public')));
app.use(express.urlencoded({ extended: true }));
app.get('/', (_req, res) => {
    Message.find().sort({ added: -1 }).then(result => {
        res.render('index', { title: 'Welcome', messages: result });
    }).catch(error => {
        console.log(error);
    });
});
app.post('/new', (req, res) => {
    const message = new Message(req.body);
    message.added = new Date;
    message.save().then(result => {
        console.log(result);
        res.redirect('/');
    }).catch(error => {
        console.log(error);
    });
});
// if the user tries to access a route that does not exist, redirect the to the root
app.use((_req, res) => {
    res.redirect('/');
});
//# sourceMappingURL=server.js.map