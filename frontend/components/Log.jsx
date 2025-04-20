

export default function Log({log}) {
  const { date, workTitle, duration, memberName } = log;
  return (
    <>
    <tr>
      <td>{new Date(date).toLocaleDateString('no-NO')}</td>
      <td>{memberName.join(', ')}</td>
      <td>{workTitle}</td>
      <td>{duration} timer</td>
    </tr>
    </>
  )
}
