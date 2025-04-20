import {Link} from "react-router-dom"

export default function Layout({children}){
    return (
        <>
        <header className="header">
        <div className="container">
          <h1 className="logo">TEAM X</h1>
          <nav>
            <ul className="nav-list">
              <li><Link to="/">Hjem</Link></li>
              <li><Link to="/Hans">Hans</Link></li>
              <li><Link to="/Trine">Trine</Link></li>
              <li><Link to="/Jostein">Jostein</Link></li>
              <li><Link to="/Ann-Sofi">Ann-Sofi</Link></li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="container">
        {children}
      </main>
        </>
    )
}