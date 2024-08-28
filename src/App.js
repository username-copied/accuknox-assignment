import './App.css';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className='app'>
      <Navbar />
      <div className='Dashboard'>
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
