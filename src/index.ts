import express, { Application } from "express"
import appConf from "./appp";
import dbConfig from "./config/db";


const app: Application = express();
appConf(app)
dbConfig()


const port = 2024


app.listen(port, () => {
    console.log(`server is listening on ${port}`);
})