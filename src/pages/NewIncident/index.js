import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

import { FiArrowLeft } from "react-icons/fi";
import logoImg from "../../assets/logo.svg";

export default function NewIncident() {
  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero" />

          <h1> Cadastrar novo caso </h1>
          <p>
            Descreva o caso detalhadamente para encontrar alguma pessoa que seja
            uma heroína ao resolvê-lo.
          </p>

          <Link to="/profile" className="back-link">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para a página principal
          </Link>
        </section>

        <form>
          <input type="text" placeholder="Título do caso" />
          <textarea placeholder="Descrição" />
          <input type="text" placeholder="Valor em R$" />

          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
