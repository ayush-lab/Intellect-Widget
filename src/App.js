import Slider from './Components/Widgets/Slider/Slider';
import {Routes, Route} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar';
import Volume from './Components/Widgets/Volume/Volume';

function App() {
  return (
    <div className="App">
      <Navbar/>

      <Routes>
          <Route path="/" element={<Slider />} />
          <Route path="/volume" element={<Volume />} />

       </Routes>
      
    </div>
  );
}

export default App;
