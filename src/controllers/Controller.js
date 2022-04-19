import { model } from "../model/model.js"
import jwt from 'jsonwebtoken'

export const verifyJWT = (req, res, next) => {
    const token = req.headers['x-access-token'];
    if(!token){
        return res.status(401).json({auth: false, message: 'No token provided'})
        }
    jwt.verify(token, process.env.SECRET, function(err, decoded){
        if(err){
            return res.status(500).json({auth: false, message: 'Failed to authenticate token'})
            }
        req.userId = decoded.id;
        next()
        })
}

export const getIndex = async (req, res) => {
    const users = await model.findAll()
    res.status(200).render('index.ejs', {
        users
    })
}

export const postLogIn = async (req, res) => {
    const { name, password } = req.body
    const userAuth = await model.findAll({
        where: {
            name: name,
            password: password
        }
    })
    if(userAuth.length){
        const id = userAuth.id
        const token = jwt.sign({ id }, process.env.SECRET, {
            expiresIn: 300
        })
        res.status(201).json({ name, password, token})
    } else {
        res.status(401).send('Usuário não existe no banco de dados')
    }
}   

export const getUser = (req, res) => {
    res.status(200).render('index.ejs').json({id: 1})
}
