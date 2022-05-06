import { Component } from "react"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import { Accueil } from "./Accueil";
import { Formulaire } from "./Formulaire";
import Details from "./Details";
import { Favoris } from "./Favoris";
import { Menu } from "./Menu";

export class Application extends Component {
    render() { 
        return ( 
            <div>
                <BrowserRouter>
                    <Menu/>
                    <Routes>
                        <Route path="/" element={<Accueil/>}/>
                        <Route path="/formulaire" element={<Formulaire/>}/>
                        <Route path="/detail/:id" element={<Details/>}/>
                        <Route path="/favoris" element={<Favoris/>}/>
                    </Routes>
                </BrowserRouter>
            </div>
        )
    }
}