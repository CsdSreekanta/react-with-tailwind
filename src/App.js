import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <h1 className='text-6xl'> This is the heading text</h1>
      <Header></Header>
    </div>
  );
}

export default App;
