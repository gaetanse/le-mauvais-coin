import { Component } from "react"
import { BrowserRouter,Routes,Route,Link } from "react-router-dom"
import { Navbar,Container,Nav } from "react-bootstrap"
import { Accueil } from "./Accueil";
import { Formulaire } from "./Formulaire";
import { Details } from "./Details";
import { Favoris } from "./Favoris";

export class Application extends Component {
    render() { 
        return ( 
            <div>
                <BrowserRouter>
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
                    <Routes>
                        <Route path="/" element={<Accueil/>}/>
                        <Route path="/formulaire" element={<Formulaire/>}/>
                        <Route path="/details" element={<Details/>}/>
                        <Route path="/favoris" element={<Favoris/>}/>
                    </Routes>
                </BrowserRouter>
            </div>
        )
    }
}