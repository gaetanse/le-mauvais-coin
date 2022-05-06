import e from "cors";
import {Component} from "react"
import { Form } from "react-bootstrap"
const axios = require('axios')

export class Recherche extends Component {
    constructor(props) {
        super(props);
        this.state ={
            titre: undefined
        }
    }
    rechercher(e){
        e.preventDefault()
        axios.get('http://localhost:666/annonces')
            .then((response) => {
                let arrayAnnonces = []
                for(const element of response.data){
                    if(e.target.value==element.titre){
                        arrayAnnonces.push(element)
                    }
                }
                if(arrayAnnonces==0){
                    arrayAnnonces = response.data
                }
                console.log(arrayAnnonces)
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    render() { 
        return ( 
            <Form.Control type="text" placeholder="Taper le titre d'une annonce" onChange={(e)=>this.rechercher(e)}/>
        )
    }
}