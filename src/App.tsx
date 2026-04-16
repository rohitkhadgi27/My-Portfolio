import './App.css';
import { HomePage } from './Components/Home/HomePage';
import Appbar from './Components/Appbar/Appbar';

function App() {
  return (
    <div className='container'>
      <Appbar />
      <HomePage />    
    </div>
  )
}

export default App
