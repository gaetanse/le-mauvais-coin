import express from "express"
import cors from "cors"

const api = express()
api.use(express.json())
app.use(cors())

api.get("/annonces", (req, res) =>{
    res.json("accueil reponse")
})