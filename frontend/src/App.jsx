
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout'
import Home from '../components/Home'
import UserDetail from '../components/UserDetail'

function App() {
  return (
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/:memberName" element={<UserDetail />} />
            </Routes>
          </Layout>
        </Router>
      );
}

export default App;