import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import api from "../../services/api";
import "./styles.css";

import { FiArrowLeft } from "react-icons/fi";
import logoImg from "../../assets/logo.svg";

export default function NewIncident() {
  let [title, setTitle] = useState("");
  let [description, setDescription] = useState("");
  let [value, setValue] = useState("");

  const ongId = localStorage.getItem("ongId");
  const history = useHistory();

  async function handleNewIncident(event) {
    event.preventDefault();

    const data = {
      title,
      description,
      value
    };

    try {
      await api.post("/incidents", data, {
        headers: {
          Authorization: ongId
        }
      });

      history.push("/profile");
      alert("Caso cadastrado com sucesso!");
    } catch (error) {
      alert("Erro ao cadastrar no caso!\nPor favor, tenta novamente.");
    }
  }

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

        <form onSubmit={handleNewIncident}>
          <input
            type="text"
            value={title}
            onChange={event => setTitle(event.target.value)}
            placeholder="Título do caso"
          />

          <textarea
            value={description}
            onChange={event => setDescription(event.target.value)}
            placeholder="Descrição"
          />

          <input
            type="text"
            value={value}
            onChange={event => setValue(event.target.value)}
            placeholder="Valor em R$"
          />

          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
