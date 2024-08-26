import './App.css';
import Dashboard from './components/Dashboard';
import Dashboard2 from './components/Dashboard2';
import Navbar from './components/Navbar';
import SideMenu from './components/SideMenu';
// import Dashboard2 from './components/Dashboard2';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <div className='Dashboard'>
        <Dashboard />
      </div>
      {/* <Dashboard2/> */}
      {/* <SideMenu/> */}
    </div>
  );
}

export default App;
