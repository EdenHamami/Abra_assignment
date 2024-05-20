import logo from './logo.svg';
import './App.css';
import AddPet from './pages/AddPet';
import PetCard from './components/PetCard';
import HomePage from './pages/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/add" element={<AddPet/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
