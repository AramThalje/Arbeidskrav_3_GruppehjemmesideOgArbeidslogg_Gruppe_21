// File: src/components/Layout.jsx
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
        <div className="container">
          <h1 className="logo">TEAM X</h1>
          <nav>
            <ul className="nav-list">
              <li><Link to="/">Hjem</Link></li>
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
        </div>
      </header>
      <main className="container">
        {children}
      </main>
    </>
  );
}
