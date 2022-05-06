import { useParams } from "react-router-dom"

export const withParams = (Composant) => props => {
    let {id} = useParams()
    return (<Composant {...props} id={id} />)
}