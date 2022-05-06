import express from "express"
import cors from "cors"

const api = express()
api.use(express.json())
api.use(cors({origin: "*"}))

class Annonce{
    constructor(id,titre,contenu,url){
        this.id = id
        this.titre = titre
        this.contenu = contenu
        this.url = url
    }
}

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
    },
    {
        "id":2,
        "titre":"je suis un titre",
        "contenu":"je suis le contenu",
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/IMG_%28business%29.svg/1200px-IMG_%28business%29.svg.png"
    },
    {
        "id":3,
        "titre":"je suis un titre",
        "contenu":"je suis le contenu",
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/IMG_%28business%29.svg/1200px-IMG_%28business%29.svg.png"
    },
    {
        "id":4,
        "titre":"je suis un titre",
        "contenu":"je suis le contenu",
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/IMG_%28business%29.svg/1200px-IMG_%28business%29.svg.png"
    },
    {
        "id":5,
        "titre":"je suis un titre",
        "contenu":"je suis le contenu",
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/IMG_%28business%29.svg/1200px-IMG_%28business%29.svg.png"
    }
]

const favoris = [
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
    },
    {
        "id":2,
        "titre":"je suis un titre",
        "contenu":"je suis le contenu",
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/IMG_%28business%29.svg/1200px-IMG_%28business%29.svg.png"
    }
]

//Endpoint pour créer une annonce
api.post('/annonce', (req, res) => {
    const {titre, contenu, url} = req.body
    const annonce = new Annonce(data.length,titre,contenu,url)
    data.push(annonce)
    res.json({message: "annonce ajouté"})
})

//Endpoint pour récuperer la liste des annonces
api.get('/annonces', (req, res) => {
    res.json(data)
})

//Endpoint pour récuperer la liste des favoris
api.get('/favoris', (req, res) => {
    res.json(favoris)
})

//Endpoint pour récupérer une seule annonce
api.get('/annonce/:id', (req, res) => {
    res.json(data[req.body.id])
})

//Endpoint pour récuperer la liste des favoris
api.get('/favoris', (req, res) => {
    res.json(dataService.favoris)
})

api.listen(666,()=>{
    
})