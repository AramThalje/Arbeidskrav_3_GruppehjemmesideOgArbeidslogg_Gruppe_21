



import React from 'react';

export default function Log({ log }) {
  const { date, workTitle, duration, members } = log;

  return (
    <tr>
      <td>{new Date(date).toLocaleDateString('no-NO')}</td>
      <td>{members.join(', ')}</td>
      <td>{workTitle}</td>
      <td>{duration} timer</td>
    </tr>
  );
}
