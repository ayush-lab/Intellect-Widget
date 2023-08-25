import logo from './logo.svg';
import './App.css';
import Slider from './Components/Widgets/Slider/Slider';
import {Routes, Route} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>

      <Routes>
          <Route path="/" element={<Slider />} />

       </Routes>
      
    </div>
  );
}

export default App;
