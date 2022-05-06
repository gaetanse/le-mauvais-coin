import { Component,useState } from "react"
import { useParams,Link } from "react-router-dom"
import { Card } from "react-bootstrap"
import { withParams } from "./with-params"
const axios = require('axios')

class Details extends Component{

    constructor(props){
        super(props)
        this.state = {
            data: undefined
        }
    }
    
    componentDidMount() {
        console.log(this.props.id)
        axios.get("http://localhost:666/annonce/"+this.props.id)
        .then((response) => {
            console.log(response.data)
            this.setState({data:response.data})
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    render(){
        return ( 
            <div>
                {
                    this.state.data==undefined?<p>Annonce pas chargé</p>
                    :
                    <Card style={{ width: '18rem' }}>
                        <Card.Img className="mx-auto" variant="top" src={this.state.data.url} style={{width:150,height:150,marginTop:"10px"}}/>
                        <Card.Body>
                            <Card.Title>{this.state.data.titre}</Card.Title>
                            <Card.Text>{this.state.data.contenu}</Card.Text>
                            <Link to={"/favoris/"+this.state.data.id}><img className="buttonAnimeBoy" src="/anime-heart.png"/></Link>
                        </Card.Body>
                    </Card>
                }
            </div>
        )
    }
}

export default withParams(Details)