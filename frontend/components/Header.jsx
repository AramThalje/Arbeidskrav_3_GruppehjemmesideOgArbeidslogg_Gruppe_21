import { Link } from "react-router-dom"; 

export default function Header(){
    return(
        <header className="header">
            <p>Group21</p>
            <nav>
                <Link to="/">Home</Link>
                <Link to="majed">Majed</Link>
                <Link to="aram">Aram</Link>
                <Link to="mahmod">Mahmod</Link>
                <Link>H</Link>
            </nav>
        </header>
    )
}