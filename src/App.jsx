import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "@pages/HomePage/HomePage";
import ProductList from "@pages/ProductListingPage/ProductListingPage";
import ProductView from "@pages/ProductViewPage/ProductViewPage";
import CartPage from "@pages/CartPage/CartPage";
import ConfirmarCompra from "@pages/ConfirmarCompraPage/ConfirmarCompraPage";
import SucessoPage from "@pages/SucessoPage/SucessoPage";
import LoginPage from "@pages/LoginPage/LoginPage";
import CriarContaPage from "@pages/CriarContaPage/CriarContaPage";
import CriarFormulario from "@pages/CriarFormularioPage/CriarFormularioPage";
import PedidosPage from "@pages/PedidosPage/PedidosPage";
import Informacoes from "@pages/InformacoesPage/InformacoesPage";
import CategoriasPage from "@pages/CategoriasPage/CategoriasPage";
import Error from "@pages/Error404/Error404";
import { CartProvider } from '@context/CartContext';

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="ProductList/" element={<ProductList />} />
          <Route path="ProductView/" element={<ProductView />} />
          <Route path="Cart/" element={<CartPage />} />
          <Route path="ConfirmarCompra/" element={<ConfirmarCompra />} />
          <Route path="Sucesso/" element={<SucessoPage />} />
          <Route path="Login/" element={<LoginPage />} />
          <Route path="Registrar/" element={<CriarContaPage />} />
          <Route path="CriarFormulario/" element={<CriarFormulario />} />
          <Route path="Pedidos/" element={<PedidosPage />} />
          <Route path="Informacoes/" element={<Informacoes />} />
          <Route path="Categorias/" element={<CategoriasPage />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
