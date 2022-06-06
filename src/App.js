import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import {Route, Routes} from 'react-router-dom'
import Login from "./pages/Login";
import Home from './pages/Home'
import Products from './components/Products/Products'

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Login></Login>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/products' element={<Products/>}></Route>
      </Routes>

      {
        // Code here
        // <Navbar></Navbar>

      }
    </div>
  );
}

export default App;
