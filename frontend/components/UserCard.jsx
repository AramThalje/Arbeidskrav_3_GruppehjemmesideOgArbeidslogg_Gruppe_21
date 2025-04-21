import React from 'react';
import { Link } from 'react-router-dom';

export default function UserCard({ member }) {
  const { memberName, email, imageUrl } = member;
  const slug = memberName.replace(/\s+/g, '-');
  return (
    <article className="card">
      <img src={imageUrl} alt={memberName} className="card-image" />
      <div className="card-content">
        <h3><Link to={`/${slug}`}>{memberName}</Link></h3>
        <a href={`mailto:${email}`}>{email}</a>
      </div>
    </article>
  );
}
