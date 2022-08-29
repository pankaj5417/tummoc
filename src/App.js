import {Route,Routes} from 'react-router-dom'
import './App.css';
import { LoginPage } from './pages/loginPage/LoginPage';



function App() {
  return (
    <div className="App">
     
      <Routes>
       <Route path="/" element={<LoginPage />}></Route> 
      
    
    </Routes>

    </div>
  );
}

export default App;
