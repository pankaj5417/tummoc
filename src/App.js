import {Route,Routes} from 'react-router-dom'
import './App.css';

import LoginModal from './components/loginModal/LoginModal';
import { Navbar } from './components/navbar/Navbar';
import { Sidebar } from './components/sidebar/Sidebar';
import { GymHomePage } from './pages/gymPage/GymHomePage';

function App() {
  return (
    <div className="App">
     
      <Routes>
       <Route path="/" element={<GymHomePage/>}></Route> 
      
    
    </Routes>

    </div>
  );
}

export default App;
