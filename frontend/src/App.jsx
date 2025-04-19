
import './App.css'
import Header from '../components/Header'
import Home from '../components/Home'
import { Route, Routes } from 'react-router-dom'
import UsersCards from '../components/UsersCards'

function App() {

  return (
    <>
    
    {/* <Routes>
      <Route path="/home" element={<Home/>} />
      <Route path='/user' element={<UsersCards/>}/>
    </Routes> */}
      <Header/>
      <Home />
    </>
  )
}

export default App
