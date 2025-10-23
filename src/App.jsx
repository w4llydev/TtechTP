import { Routes, Route } from "react-router-dom";

import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";

import Inicio from "./pages/Inicio.jsx";
import ProductDetail from './components/productdetail/ProductDetail.jsx';
import SearchProduts from './components/searchproducts/SearchProducts.jsx';
import Admin from './components/admin/Admin.jsx';

const App = () => {
  return (
    <>
    <Header/>

    <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Search/" element={<SearchProduts/>} /> 
        <Route path="/Productos/:id" element={<ProductDetail/>} />  
        <Route path="/Admin/" element={<Admin/>} /> 
    </Routes>




    <Footer/>
    </>
  )
}

export default App
