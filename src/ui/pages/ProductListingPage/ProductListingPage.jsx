import "@styles/pages/ProductListingPage/ProductListingPage.css";
import Layout from "@components/Layout/Layout";
import Cards from "@components/Cards/Cards";
import Cards2 from "@components/Cards/Cards2";
import sapatoAzul from "@assets/img/sapato_card.png";
import setaParaBaixo from "@assets/img/seta_para_baixo.png";
import { useState, useEffect } from "react";
import axios from "axios";

function ProductListingPage() {
  const [character, setCharacter] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://669111dd26c2a69f6e8e4d94.mockapi.io/products/products"
        );
        setCharacter(response.data);
        console.log("API response:", response.data);
        setLoading(false);
        console.log(`deu certo`);
      } catch (error) {
        console.log(`o erro foi ${error}`);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <Layout>
      <section className="section-product-list">
        {loading ? (
          <p>Carregando...</p>
        ) : (
          <>
            <div className="topico-product-list">
              <h1>
                Resultado para "Tênis" - <span>389 produtos</span> {/*props*/}
              </h1>
              <div className="dropdown-ordernar-por">
                <h1>
                  Ordenar por: <span>mais relevantes</span>
                </h1>
                <i>
                  <img src={setaParaBaixo} alt="seta para baixo" />
                </i>
              </div>
            </div>
            <div className="corpo-product-list">
              <div className="checkbox-filtrar-por">
                <div className="checkbox-filtrar-por-center">
                  <h1>Filtrar por</h1>
                  <hr className="barra-filtrar-por" />
                  {/* Outros filtros */}
                </div>
              </div>
              <div className="card-product-list">
                <div className="produto-em-alta-cards">
                  {Array.isArray(character) &&
                    character.slice(5, 20).map((card) =>
                      card.desconto === true ? (
                        <Cards2
                          key={card.id}
                          oferta={card.valordesconto}
                          foto={sapatoAzul}
                          titulo={card.titulo}
                          descricao={card.descricao}
                          valorantigo={card.valorantigo}
                          valoratual={card.valoratual}
                        />
                      ) : (
                        <Cards
                          key={card.id}
                          foto={sapatoAzul}
                          titulo={card.titulo}
                          descricao={card.descricao}
                          valorantigo={card.valorantigo}
                          valoratual={card.valoratual}
                        />
                      )
                    )}
                </div>
              </div>
            </div>
          </>
        )}
      </section>
    </Layout>
  );
}

export default ProductListingPage;
