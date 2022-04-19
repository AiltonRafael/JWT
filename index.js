import express from 'express'
import path from 'path'
import { routes } from './src/routes/routes.js'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const port = 3005
const __dirname = path.resolve(path.dirname(''))

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')))
app.use(routes)


app.listen(port, () => {
    console.log(`running on port ${port}`)
})