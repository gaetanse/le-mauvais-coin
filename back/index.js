import express from "express"
import cors from "cors"

const api = express()
api.use(express.json())
api.use(cors({origin: "*"}))

const data = [
    {
        "id":0,
        "titre":"je suis un titre",
        "contenu":"je suis le contenu",
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/IMG_%28business%29.svg/1200px-IMG_%28business%29.svg.png"
    },
    {
        "id":1,
        "titre":"je suis un titre",
        "contenu":"je suis le contenu",
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/IMG_%28business%29.svg/1200px-IMG_%28business%29.svg.png"
    }
]

//Endpoint pour créer une annonce
api.post('/annonces', (req, res) => {
    const {id, titre, contenu, url} = req.body
    if(title != undefined && content != undefined) {
        dataService.createAnnonce(id, titre, contenu,url)
        res.json({message: "annonce ajoutée"})
    }
    else
        res.json({message: "Merci d'envoyer un titre, un contenu et une photo"})
})

//Endpoint pour récuperer la liste des annonces
api.get('/annonces', (req, res) => {
    res.json(data)
})

//Endpoint pour récupérer une seule annonce
api.get('/annonce/:id', (req, res) => {
    const annonce = dataService.findAnnonceById(req.params.id)
    if(annonce != undefined)
        res.json(annonce)
    else
        res.json({message: "aucune annonce avec cet id"})
})

//Endpoint pour récuperer la liste des favoris
api.get('/favoris', (req, res) => {
    res.json(dataService.favoris)
})

api.listen(666,()=>{
    
})