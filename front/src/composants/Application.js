import { Component } from "react"
import { BrowserRouter,Routes,Route,Link } from "react-router-dom"
import { } from "react-bootstrap"
import { Accueil } from "./Accueil";
import { Formulaire } from "./Formulaire";
import { Details } from "./Details";
import { Favoris } from "./Favoris";

export class Application extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(){
        
    }
    state = {  }
    render() { 
        return ( 
            <div>
                <BrowserRouter>
                    <nav>
                        <Link to="/">Accueil</Link>
                        <Link to="/formulaire">Formulaire</Link>
                        <Link to="/details">Détails</Link>
                        <Link to="/favoris">Favoris</Link>
                    </nav>
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