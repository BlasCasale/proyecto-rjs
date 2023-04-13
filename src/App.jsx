import NavBar from "./components/NavBar/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import RegisterForm from "./components/RegisterForm/RegisterForm.jsx";


function App() {
  return (
    <>

      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={ <ItemListContainer/>}/>
          <Route path="/category/:category" element={ <ItemListContainer/> }/>
          <Route path="/item/:id" element={ <ItemDetailContainer/> }/>
          <Route path="/registro" element={ <RegisterForm/>}/>
        </Routes>
      
      </BrowserRouter>
    </>
  );
}

export default App;
