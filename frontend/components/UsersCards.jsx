import React, {useEffect, useState} from 'react';
import {client} from '../sanity/client';      
import UserCard from './UserCard';

export default function UsersCards() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    client.fetch(`*[_type == "members"]{
      _id,
      memberName,
      email,
      "imageUrl": Image.asset->url
    }`)
    .then(data => setMembers(data))
    .catch(console.error);
  }, []);

  return (
    <div className="cards-grid">
      {members.map(member => (
        <UserCard key={member._id} member={member}/>
      ))}
    </div>
  );
}
