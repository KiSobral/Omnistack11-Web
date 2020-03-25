import React from "react";
import "./styles.css";

import { FiLogIn } from "react-icons/fi";
import heroesImg from "../../assets/heroes.png";
import logoImg from "../../assets/logo.svg";

export default function Login() {
  return (
    <div className="login-container">
      <section className="form">
        <img src={logoImg} alt="Be The Hero" />

        <form>
          <h1>Faça login</h1>

          <input placeholder="Sua ID" />
          <button type="submit"> Entrar </button>

          <a href="/register">
            <FiLogIn size={16} color="#E02041" />
            Faça seu cadastro
          </a>
        </form>
      </section>

      <img src={heroesImg} alt="Heroes" />
    </div>
  );
}
