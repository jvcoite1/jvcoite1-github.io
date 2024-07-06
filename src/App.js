import './App.css';
import Navbar from './components/Navbar';
import Destaques from './components/Destaques';
import Sobre from './components/Sobre';
import Portfolio from './components/Portfolio';
import Contato from './components/Contato';
import Rodape from './components/Rodape';
import Tecnologias from './components/Tecnologias';

function App() {
  return (
    <>
    <Navbar />
    <Destaques />
    <Sobre />
    <Tecnologias />
    <Portfolio />
    <Contato />
    <Rodape />
    </>
  );
}

export default App;
