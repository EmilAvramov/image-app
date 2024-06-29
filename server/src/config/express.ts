import express from 'express'
import helmet from 'helmet'
import ServerStatusController from '../controllers/ServerStatus'
import ImageController from '../controllers/Image'
import cors from '../middelware/cors'

const app = express()

app.use(helmet())
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/status', ServerStatusController)
app.use('/images', ImageController)

export default app
