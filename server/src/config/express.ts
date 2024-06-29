import express from 'express'
import helmet from 'helmet'
import ServerStatusController from '../controllers/ServerStatus'
import cors from '../middelware/cors'

const app = express()

app.use(helmet())
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/status', ServerStatusController)

export default app
