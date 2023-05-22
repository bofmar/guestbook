import express from 'express';
import path from 'path';
import url from 'url';
import dotenv from 'dotenv';

dotenv.config();

// Declare the constants we will need
const PORT = process.env.PORT;
const runningMessage = `Listening for requests on port ${PORT}`;
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.join(__dirname, '..') //gets the root of the project
const MONGOURL = '' //TODO

const app = express();

app.get('/', (_req: express.Request, res: express.Response) => {
	res.send(PORT);
});

app.listen(PORT, () => console.log(runningMessage));
