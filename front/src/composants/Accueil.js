import { Component } from "react"
import { Recherche } from "./Recherche";

const axios = require('axios')

export class Accueil extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidMount(){
        axios.get('http://localhost:666/annonces')
            .then((response) => {
                //console.log(response.data);
                this.setState({data:response.data})
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    render() { 
        return ( 
        <div>
            <Recherche/>
        </div> 
        )
    }
}