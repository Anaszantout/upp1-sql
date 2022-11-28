import Navbar from './components/Navbar/Navbar';
import './App.css';
import Views from './Views';

function App() {
  return (
    < div className='App'>

      <Navbar/>
    
      <div className="container">
        < Views /> 
        
      </div>
      
    </div>
  );
}

export default App;
