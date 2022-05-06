import { Component } from "react"
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
            accueil
            <br/>
            {
                this.state.data==0?
                <p>Aucune annonce</p>
                :
                this.state.data.map((e,i)=>{
                    return(
                        <div key={i}>
                            <div>{e.id}</div>
                            <div>{e.titre}</div>
                            <div>{e.contenu}</div>
                            <div>{e.url}</div>
                        </div>
                    )
                })
            }
        </div> 
        )
    }
}