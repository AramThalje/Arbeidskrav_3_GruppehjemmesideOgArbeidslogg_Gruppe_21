
import './App.css'
import Header from '../components/Header'
import Home from '../components/Home'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
    
    {/* <Routes>
    <Route path="/home" element={<Home/>} />
    </Routes> */}
      <Header/>
      <Home />
    </>
  )
}

export default App
