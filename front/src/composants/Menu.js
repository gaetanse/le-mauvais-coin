import { Navbar,Container,Nav } from "react-bootstrap"
import { Link } from "react-router-dom"
import { Component } from "react"
import { CompteurFavoris } from "./CompteurFavoris"

export class Menu extends Component {
    render() { 
        return ( 
            <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="">Le mauvais coin</Navbar.Brand>
                <Nav className="me-auto">
                    <Link className="link" to="/">Accueil</Link>
                    <Link className="link" to="/formulaire">Formulaire</Link>
                    <Link className="link" to="/favoris">Favoris</Link>
                    <CompteurFavoris/>
                </Nav>
                </Container>
            </Navbar>
        )
    }
}