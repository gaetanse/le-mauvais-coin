import { Component } from "react"
import { Form,Button } from "react-bootstrap"

const axios = require('axios')

export class Formulaire extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titre: undefined,
            contenu: undefined,
            url: undefined
        }
    }
    ajouterAnnonce = (e) =>{
        e.preventDefault()
        console.log(this.state)
        if(this.state.titre!==undefined&&this.state.contenu!==undefined&&this.state.url!==undefined){
            const annonce = { titre:this.state.titre,contenu:this.state.contenu,url:this.state.url };
            axios.post('http://localhost:666/annonce', annonce)
            .then(response => console.log(response.data))
        }
    }
    render() { 
        return ( 
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Titre</Form.Label>
                    <Form.Control type="text" placeholder="titre" value={this.state.titre} onChange={(e)=>this.setState({titre: e.target.value})}/>
                    <Form.Label>Contenu</Form.Label>
                    <Form.Control type="text" placeholder="contenu" value={this.state.contenu} onChange={(e)=>this.setState({contenu: e.target.value})}/>
                    <Form.Label>Url</Form.Label>
                    <Form.Control type="text" placeholder="url" value={this.state.url} onChange={(e)=>this.setState({url: e.target.value})}/>
                </Form.Group>
                <Button variant="primary" type="submit" onClick={(e)=>(this.ajouterAnnonce(e))}>
                    Ajouter une annonce
                </Button>
            </Form>
        )
    }
}