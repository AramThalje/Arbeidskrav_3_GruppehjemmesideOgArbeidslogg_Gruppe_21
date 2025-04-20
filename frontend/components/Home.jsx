import Logs from "./Logs";
import UsersCards from "./UsersCards";

export default function Home(){
    return (
        <>
        <h2 className="section-title">Gruppemedlemmer</h2>
      <UsersCards />

      <h2 className="section-title">Arbeidslogg</h2>
      <Logs />

       
        </>
    )
}