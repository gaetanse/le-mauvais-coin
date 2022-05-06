import e from "cors";
import {Component} from "react"
import {Link} from "react-router-dom"
import { Form,Card,Row,Col } from "react-bootstrap"
const axios = require('axios')

export class Recherche extends Component {
    constructor(props) {
        super(props);
        this.state ={
            titre: undefined,
            data: []
        }
        axios.get('http://localhost:666/annonces')
            .then((response) => {
                let arrayAnnonces = []
                for(const element of response.data){
                    if(""==element.titre){
                        arrayAnnonces.push(element)
                    }
                }
                if(arrayAnnonces==0){
                    arrayAnnonces = response.data
                }
                this.setState({data:arrayAnnonces})
                console.log(arrayAnnonces)
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    ajouterFavori(e,id,element){
        e.preventDefault()
        
            if(element.titre!=undefined&&element.contenu!=undefined&&element.url!=undefined){
        
                const favori = { id:id,titre:element.titre,contenu:element.contenu,url:element.url };
        
                axios.post('http://localhost:666/favori', favori)
        
                .then(response => {
                    console.log(response.data)
                    if(response.data.message=="ok"){
                        document.getElementById("button"+id).style.visibility = "hidden"
                        console.log(document.getElementById("button"+id))
                    }
                })
        
            }

        document.getElementById("button"+id).style.visibility = "hidden"
        console.log(document.getElementById("button"+id))
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
                this.setState({data:arrayAnnonces})
                console.log(arrayAnnonces)
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    render() { 
        return ( 
            <div>
            <Form.Control type="text" placeholder="Taper le titre d'une annonce" onChange={(e)=>this.rechercher(e)}/>
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
                                    <button style={{borderRadius:"100px",border:"white"}} id={"button"+e.id} onClick={(y)=>this.ajouterFavori(y,e.id,e)}><img className="buttonAnimeBoy" src="/anime-heart.png"/></button>
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