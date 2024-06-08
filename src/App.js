import './App.css';
import 'bootstrap'
import Navbar from './components/Navbar';
import Destaques from './components/Destaques';
import Sobre from './components/Sobre';
import Portfolio from './components/Portfolio';
import Contato from './components/Contato';
import Rodape from './components/Rodape';

function App() {
  return (
    <>
    <Navbar />
    <Destaques />
    <Sobre />
    <Portfolio />
    <Contato />
    <Rodape />
    </>
  );
}

export default App;
