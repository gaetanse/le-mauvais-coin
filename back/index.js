import express from "express"
import cors from "cors"

const api = express()
api.use(express.json())
api.use(cors())

api.get("/annonces", (req, res) =>{
    res.json("accueil reponse")
})

api.listen(666,()=>{
    
})