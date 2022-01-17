import express from 'express'
import dotenv from 'dotenv'
import models from './models/models.js'
import path from 'path';
import { fileURLToPath } from 'url';
import Sequelize from './db.js'
import cors from 'cors'
import router from './routes/index.js'
import ErrorHandlingMiddleware from './middleware/ErrorHandlingMiddleware.js'
import fileUpload from 'express-fileupload'

dotenv.config()

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = process.env.PORT || 5000

const app = express ()
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', router)

//Error processing, last Middleware
app.use(ErrorHandlingMiddleware)

const start = async () => {
    try{
        await Sequelize.authenticate()
        await Sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    }catch(e) {
        console.log(e)
    }
}

start()



