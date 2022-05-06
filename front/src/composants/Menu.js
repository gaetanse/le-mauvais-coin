import { Navbar,Container,Nav } from "react-bootstrap"
import { Link } from "react-router-dom"
import { Component } from "react"

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
                </Nav>
                </Container>
            </Navbar>
        )
    }
}