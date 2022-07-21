// import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageA from './pages/PageA';
import PageB from './pages/PageB'


function App() {


  return (
    <Router>
      <div className='App'>
        <Routes>
        <Route 
            path="/pagea"
            element={<PageA/>}
          />
          <Route 
            path="/pageb"
            element={<PageB/>}
          />
          <Route 
            path="/"
            element={<Home/>}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
