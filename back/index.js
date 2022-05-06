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
        "titre":"test",
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
        "titre":"ja",
        "contenu":"je suis le contenu",
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/IMG_%28business%29.svg/1200px-IMG_%28business%29.svg.png"
    },
    {
        "id":3,
        "titre":"je suis un titre",
        "contenu":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
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

const favoris = []

//Endpoint pour créer une annonce
api.post('/annonce', (req, res) => {
    const {titre, contenu, url} = req.body
    const annonce = new Annonce(data.length,titre,contenu,url)
    data.push(annonce)
    res.json({message: "annonce ajouté"})
})

//Endpoint pour créer un favori
api.post('/favori', (req, res) => {
    const {id, titre, contenu, url} = req.body
    const array = []
    for(let i=0;i<favoris.length;++i){
        console.log(favoris[i].id)
        console.log(favoris[i].id + " / "+id)
        if(favoris[i][id]==id){
            array.push(favoris[i])
        }
    }
    if(array.length==0){
        const favori = new Annonce(data.length,titre,contenu,url)
        favoris.push(favori)
        res.json({message: "favori ajouté"})
    }
    else{
        console.log("existe deja")
        res.json({message: "ok"})
    }
})

//Endpoint pour récuperer la liste des annonces
api.get('/annonces', (req, res) => {
    res.json(data)
})

//Endpoint pour récuperer la liste des favoris
api.get('/favoris', (req, res) => {
    res.json(favoris)
})

//Endpoint pour le nombre de favoris
api.get('/nombreFavoris', (req, res) => {
    res.json(favoris.length)
})

//Endpoint pour récupérer une seule annonce
api.get('/annonce/:id', (req, res) => {
    //console.log(req.params.id)
    res.json(data[req.params.id])
})

api.listen(666,()=>{
  // TODO document why this arrow function is empty
})