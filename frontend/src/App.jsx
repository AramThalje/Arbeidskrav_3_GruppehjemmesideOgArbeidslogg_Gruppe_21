import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout'
import Home from '../components/Home'
import UserDetail from '../components/UserDetail'
import "./assets/style/styles.scss"

function App() {
  return (
        
          <Layout>
            <section className='main'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/:memberName" element={<UserDetail />} />
            </Routes>
            </section>
          </Layout>
        
      );
}

export default App;