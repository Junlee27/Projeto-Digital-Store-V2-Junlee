import { useState } from "react";
import "@styles/Components/Header/Header.css";
import logo from "@assets/img/logo.svg";
import carrinho from "@assets/img/carrinho.svg";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/ProductList?search=${searchTerm}`);
    }
  };

  return (
    <>
      <header>
        <nav>
          <div className="navs">
            <div className="nav-header">
              <Link to="/"><img src={logo} alt="logo" /></Link>
              <form onSubmit={handleSearch}>
                <input
                  type="text"
                  placeholder="Pesquisar produto..."
                  className="input-icon-search"
                  id="search-product"
                  name="search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </form>
              <Link className="link-cadastro" to="/Registrar">Cadastre-se</Link>
              <button type="button"><Link to="/Login">Entrar</Link></button>
              <Link className="link-carrinho-nav" to="/Cart"><img src={carrinho} alt="carrinho" className="icon-carrinho" /></Link>
            </div>
            <div className="nav-footer">
              <li><Link to="/" className="nav-footer-home">Home</Link></li>
              <li><Link to="/ProductList" className="nav-footer-produtos">Produtos</Link></li>
              <li><Link to="/Categorias" className="nav-footer-categorias">Categorias</Link></li>
              <li><Link to="/Pedidos" className="nav-footer-pedidos">Meus Pedidos</Link></li>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
