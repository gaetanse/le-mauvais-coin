import { Component } from "react"
import { Button,Card,CardGroup,Row,Col } from "react-bootstrap"

const axios = require('axios')

export class CompteurFavoris extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nombreFavoris: undefined
        }
    }
    componentDidMount(){
        axios.get('http://localhost:666/nombreFavoris')
            .then((response) => {
                this.setState({nombreFavoris:response.data})
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    render() { 
        return ( 
        <div className="link">
            {
                this.state.nombreFavoris===0?<p>0</p>
                :this.state.nombreFavoris
            }
        </div> 
        )
    }
}