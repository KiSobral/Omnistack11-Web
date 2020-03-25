import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import api from "../../services/api";
import "./styles.css";

import { FiArrowLeft } from "react-icons/fi";
import logoImg from "../../assets/logo.svg";

export default function Register() {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [whatsapp, setWhatsapp] = useState("");
  let [city, setCity] = useState("");
  let [uf, setUf] = useState("");

  const history = useHistory();

  async function handleRegister(event) {
    event.preventDefault();

    const data = { name, email, whatsapp, city, uf };

    try {
      const response = await api.post("/ongs", data);

      localStorage.setItem("ong_id", response.data.id);
      localStorage.setItem("name", data.name);

      history.push("/profile");

      alert(
        `Seu ID de acesso: ${response.data.id}\nGuarde-a com carinho, pois esta será sua chave de acesso`
      );
    } catch (err) {
      alert("Erro no cadastro!\nTente novamente.");
    }
  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero" />

          <h1> Cadastro </h1>
          <p>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem
            os casos da sua ONG.
          </p>

          <Link to="/" className="back-link">
            <FiArrowLeft size={16} color="#E02041" />
            Já tenho um cadastro
          </Link>
        </section>

        <form onSubmit={handleRegister}>
          <input
            type="text"
            value={name}
            onChange={event => setName(event.target.value)}
            placeholder="Nome da ONG"
          />

          <input
            type="email"
            value={email}
            onChange={event => setEmail(event.target.value)}
            placeholder="E-mail"
          />

          <input
            type="text"
            value={whatsapp}
            onChange={event => setWhatsapp(event.target.value)}
            placeholder="Whatsapp"
          />

          <div className="input-group">
            <input
              type="text"
              value={city}
              onChange={event => setCity(event.target.value)}
              placeholder="Cidade"
            />

            <input
              type="text"
              value={uf}
              onChange={event => setUf(event.target.value)}
              placeholder="UF"
              style={{ width: 80 }}
            />
          </div>

          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
