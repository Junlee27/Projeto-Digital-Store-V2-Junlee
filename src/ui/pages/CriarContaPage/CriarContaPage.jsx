import Layout from "@components/Layout/Layout";
import "@styles/Components/Main/Registrar.css";
import gmail from "@assets/img/gmail.svg";
import facebook from "@assets/img/facebook.svg";
import sapatos from "@assets/img/dois_tenis_nike.png";
import { Link } from "react-router-dom";

function CriarContaPage() {
  return (
    <Layout>
      <main>
        <div className="formulario">
          <div className="title">
            <h1>Crie sua conta</h1>
            <p>Já possui uma conta? Entre <Link to="/Login">aqui</Link>.</p>
          </div>
          <form className="conta" action="/register" method="POST">
            <h4>Email </h4>
            <input type="email" name="email" placeholder="Insira seu email" required />
            <h4>Nome Completo</h4>
            <input type="text" name="nome" placeholder="Insira seu nome" required />
            <button type="submit">Criar Conta</button>
          </form>
          <div className="outrologin">
            <p>Ou faça login com</p>
            <div className="img">
              <a
                href="https://accounts.google.com/AccountChooser/signinchooser?service=merchants&continue=https%3A%2F%2Fmerchants.google.com%2Fmc%2Fproducts%2Fmethodselector%3Fa%3D719386599%26gtact%3D1&ddm=0&flowName=GlifWebSignIn&flowEntry=AccountChooser"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={gmail} alt="gmail" />
              </a>
              <a
                href="https://www.facebook.com/login/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={facebook} alt="facebook" />
              </a>
            </div>
          </div>
        </div>
        <div className="fotoSapatos">
          <img src={sapatos} alt="Dois Tênis Nike" />
        </div>
      </main>
    </Layout>
  );
}

export default CriarContaPage;
