import { SignIn, Navbar, SignUp } from './';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {


  return (
    <BrowserRouter>
    <div className='relative z-0 bg-primary'>
    <div className='bg-black bg-cover '>
    <Navbar/>
    </div>
    </div>

    <Routes path="/SignIn" element={<SignIn/>}/>
    <Routes path="/SignUp" element={<SignUp/>}/>

   { /* <Routes>
    <Route path="/register" element={<SignUp/>}/> 
    </Routes> */}
    
    </BrowserRouter>

  );
}

export default App;
