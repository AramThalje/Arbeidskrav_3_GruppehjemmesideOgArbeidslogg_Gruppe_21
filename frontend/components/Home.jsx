import Logs from "./Logs";
import UsersCards from "./UsersCards";

export default function Home(){
    return (
        <>
        <h2>Group members </h2>

        <UsersCards/>

        <h2>Work Log</h2>

        <Logs/>

       
        </>
    )
}