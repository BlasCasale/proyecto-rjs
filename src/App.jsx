import NavBar from "./components/NavBar/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import RegisterForm from "./components/RegisterForm/RegisterForm.jsx";
import LoginForm from "./components/LoginForm/LoginForm.jsx";
import { CartProvider } from "./context/cartContext.js";

function App() {
  return (
    <>

      <BrowserRouter>
        <CartProvider>
          <NavBar/>
          <Routes>
            <Route path="/" element={ <ItemListContainer/>}/>
            <Route path="/category/:category" element={ <ItemListContainer/> }/>
            <Route path="/item/:id" element={ <ItemDetailContainer/> }/>
            <Route path="/register" element={ <RegisterForm/>}/>
            <Route path="/login" element={ <LoginForm/> }/>
            <Route path="*" element={<h2>Sitio en construcción</h2>}/>
          </Routes>  
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
