import { Component } from "react"
import { Button,Card,CardGroup,Row,Col } from "react-bootstrap"
import { Link } from "react-router-dom"
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
            <br/>
            {
                this.state.data==0?
                <p>Aucune annonce</p>
                :
                <Row xs={1} md={3} className="g-4">
                {this.state.data.map((e,i)=>{
                    let newContenu = ""
                    if(e.contenu.length>100){
                        newContenu = e.contenu.substring(0,100)
                    }
                    else{
                        newContenu = e.contenu
                    }
                    return(
                        <Col key={i}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img className="mx-auto" variant="top" src={e.url} style={{width:150,height:150,marginTop:"10px"}}/>
                                <Card.Body>
                                    <Card.Title>{e.titre}</Card.Title>
                                    <Card.Text>{newContenu}</Card.Text>
                                    <Link to={"/detail/"+e.id}><img className="buttonAnimeBoy" src="/anime-search.png"/></Link>
                                    <Link to={"/favoris/"+e.id}><img className="buttonAnimeBoy" src="/anime-heart.png"/></Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                })}
                </Row>
            }
        </div> 
        )
    }
}