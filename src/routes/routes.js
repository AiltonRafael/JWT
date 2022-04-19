import express from "express"
import { getIndex, postLogIn, getUser, verifyJWT } from '../controllers/Controller.js'

export const routes = express.Router()

routes.get('/', getIndex)
routes.get('/user', verifyJWT, getUser)
routes.post('/login', postLogIn)