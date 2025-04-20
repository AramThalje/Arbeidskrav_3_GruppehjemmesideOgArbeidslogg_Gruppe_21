// 


import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { client } from '../sanity/client';

export default function UserDetail() {
  const { memberName } = useParams();
  const [member, setMember] = useState(null);
  const [logs, setLogs] = useState([]);

  // Fetch member data
  useEffect(() => {
    client.fetch(
      `*[_type == "members" && memberName == $name]{
        _id,
        memberName,
        description,
        hobbies,
        "imageUrl": Image.asset->url
      }`,
      { name: memberName.replace(/-/g, ' ') }
    )
    .then(data => {
      if (data && data.length > 0) {
        setMember(data[0]);
      }
    })
    .catch(console.error);
  }, [memberName]);

  // Fetch logs for the member, once member is loaded
  useEffect(() => {
    if (!member) return;

    client.fetch(
      `*[_type == "workLogs" && references($memberId)] | order(date desc){
        _id,
        date,
        workTitle,
        duration
      }`,
      { memberId: member._id }
    )
    .then(data => setLogs(data))
    .catch(console.error);
  }, [member]);

  if (!member) return <p>Laster...</p>;

  return (
    <div className="user-detail">
      <div className="detail-header">
        <img src={member.imageUrl} alt={member.memberName} className="detail-img" />
        <div className="detail-info">
          <h2>{member.memberName}</h2>
          <p>{member.description}</p>
          <h3>Interesser</h3>
          <ul>
            {member.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
          </ul>
        </div>
      </div>

      <h3>Arbeidslogg</h3>
      {logs.length > 0 ? (
        <table className="logs-table">
          <thead>
            <tr>
              <th>Dato</th>
              <th>Oppgave</th>
              <th>Varighet</th>
            </tr>
          </thead>
          <tbody>
            {logs.map(log => (
              <tr key={log._id}>
                <td>{new Date(log.date).toLocaleDateString('no-NO')}</td>
                <td>{log.workTitle}</td>
                <td>{log.duration} timer</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Ingen arbeidslogger funnet.</p>
      )}
    </div>
  );
}