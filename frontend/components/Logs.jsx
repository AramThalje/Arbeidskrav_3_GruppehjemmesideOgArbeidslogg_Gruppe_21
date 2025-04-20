// 




import React, { useEffect, useState } from 'react';
import { client } from '../sanity/client';
import Log from './Log';

export default function Logs() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    client.fetch(
      `*[_type == "workLogs"] | order(date desc){
        _id,
        date,
        workTitle,
        duration,
        "members": memberName[]->memberName
      }`
    )
    .then(data => setLogs(data))
    .catch(console.error);
  }, []);

  return (
    <table className="logs-table">
      <thead>
        <tr>
          <th>Dato</th>
          <th>Navn</th>
          <th>Oppgave</th>
          <th>Varighet</th>
        </tr>
      </thead>
      <tbody>
        {logs.map(log => <Log key={log._id} log={log} />)}
      </tbody>
    </table>
  );
}
