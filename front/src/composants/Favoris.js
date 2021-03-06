import { Component } from "react"
import { Card,Row,Col } from "react-bootstrap"

const axios = require('axios')

export class Favoris extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidMount(){
        axios.get('http://localhost:666/favoris')
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
            <br/>
            {
                this.state.data===0?
                <p>Pas de Favori</p>
                :
                <Row xs={1} md={3} className="g-4">
                {this.state.data.map((e,i)=>{
                    return(
                        <Col key={i}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img className="mx-auto" variant="top" src={e.url} style={{width:150,height:150,marginTop:"10px"}}/>
                                <Card.Body>
                                    <Card.Title>{e.titre}</Card.Title>
                                    <Card.Text>{e.contenu}</Card.Text>
                                
                                    <img className="buttonAnimeBoy" src="/anime-heart.png" alt=""/>
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