import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar2 from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
function App() {
  return (
    <div className="App">
    <Navbar2/>
    <Home/>
    </div>
  );
}

export default App;
