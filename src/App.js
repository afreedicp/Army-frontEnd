import './App.css';
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import NavBar from './components/Navbar';
import Home from './components/Home';

// import 'bootstrap/dist/css/bootstrap.css';
function App() {
  return (
    <div className='App'>
      <NavBar />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
