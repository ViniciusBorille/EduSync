import Button from './Componentes/button/Button';
import Cadastro from './Pages/Cadastro/Cadastro';
import Login from './Pages/Login/Login';
import 'normalize.css';



function App() {
   const handleClick = () => {
      alert('Você clicou no botão da HomePage!');
    };
   return(
      <>
      <Login/>
      </>
   ) 
}

export default App;
