import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./components/navbar";
import './App.css';
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";

function App() {
  return (
    <div className="App">
     <Router>
      <Navbar/>
       <Routes> 
        <Route path="/" element={<Home />}/>
        <Route path="/cart" element={<Cart />}/>

       </Routes>

     </Router>
     
    </div>
  );
}

export default App;
