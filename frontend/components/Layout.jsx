import {Link} from "react-router-dom"

export default function Layout({children}){
    return (
        <>
        <Link to="/">Home</Link>
        <Link to="Majed">Majed</Link>
        <Link to="Aram">Aram</Link>

        {children}
        </>
    )
}