import sequelize from './config/database'
import app from './config/express'
import dotenv from 'dotenv'

dotenv.config()

try {
  void sequelize
    .authenticate()
    .then(() => {
      console.log('Database connected...')
    })
    .then(() => {
      app.listen(process.env.SERVER_PORT, () => {
        console.log(`Server is listening to port ${process.env.SERVER_PORT}...`)
      })
    })
} catch (err) {
  console.log(err)
}
