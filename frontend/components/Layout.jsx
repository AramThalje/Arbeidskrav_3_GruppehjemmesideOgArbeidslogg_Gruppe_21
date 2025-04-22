import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { client } from '../sanity/client';

export default function Layout({ children }) {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    client.fetch(`*[_type == "members"]{ memberName }`)
      .then(data => setMembers(data))

      .catch(console.error);
  }, []);
  

  return (
    <>
      <header className="header">
        <section className="container">
          <Link to="/"><h1 className="logo">GROUP 21</h1></Link>
          <nav>
            <ul className="nav-list">
              <li><Link to="/">Home</Link></li>
              {members.map((m, i) => {
                const slug = m.memberName.replace(/\s+/g, '-');
                return (
                  <li key={i}>
                    <Link to={`/${slug}`}>{m.memberName}</Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </section>
      </header>
      <main className="container">
        {children}
      </main>
    </>
  );
}
