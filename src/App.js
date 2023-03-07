import { Navbar } from './Componants/Navbar';
import { Routes,Route } from 'react-router-dom';
import Hireus from './Componants/Hireus';
import { Team } from './Componants/Team';


function App() {
  return (
    <>
    <Routes>
    <Route path='/' element={<Navbar/>}/>
    <Route path='/hireus' element={<Hireus/>}/>
    <Route path='/team' element={<Team/>}/>
    </Routes>
    </>
  );
}

export default App;
