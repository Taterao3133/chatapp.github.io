
import './App.css';
import  Register  from './pages/Register';
import "./style.scss";
import Login  from './pages/login';
import Home from './pages/Home';
import {
  BrowserRouter,
  Route,
  Routes,
}
from 'react-router-dom'

function App() {
 
 return (

    <BrowserRouter>
    <Routes>
      <Route path='/' >                                             {/* {path='/' for default page } for purpose of wraping all components in one */}
        <Route path='login' element={<Login/>} />
        <Route path='Register' element={<Register/>} />
        <Route index='Home' element={<Home/>} />
        
      </Route>
    </Routes>
    </BrowserRouter>

  );
}

export default App;
