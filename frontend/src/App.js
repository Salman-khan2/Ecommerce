import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import SignUP from './Components/SignUp';
import PrivateComponent from './Components/PrivateComponent';
import Login from './Components/Login';
import AddProduct from './Components/AddProduct';
import ProductList from './Components/ProductList';
import UpdateProduct from './Components/UpdateProduct';
import Tester from './Components/Tester';
import Profile from './Components/Profile';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        
        <Route element={<PrivateComponent/>}>
        <Route path='/' element={<ProductList />} />
        <Route path='/add' element={<AddProduct />} />
        <Route path='/update/:id' element={< UpdateProduct />} />
        <Route path='/update' element={<Tester />} />
        <Route path='/logout' element={<h1>Loguot Component</h1>} />
        <Route path='/profile' element={<Profile/>} /> 
        </Route>
        
        <Route path='/signup' element={<SignUP />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
