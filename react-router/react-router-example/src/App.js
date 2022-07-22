// import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageA from './pages/PageA';
import PageB from './pages/PageB'
import Single from './pages/Single'

import { testdata } from './testdata'

function App() {


  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route 
            path="/pagea"
            element={<PageA testdata={testdata}/>}
          />
          <Route 
            path="/pagea/:id"
            element={<Single testdata={testdata}/>}
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
