import { SignUp } from './components';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {


  return (
    <BrowserRouter>
    <Routes>
    <Route path="register" element={<SignUp/>}/> 
    </Routes>
    </BrowserRouter>

  );
}

export default App;
