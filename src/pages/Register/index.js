import React, { useState } from 'react';

import { Container } from '../../styles/GlobalStyles';
import { Form } from './styled';

export default function Register() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    console.log(nome);
  }

  return (
    <Container>
      <h1>Crie sua conta</h1>

      <Form onSubmit={handleSubmit}>
        <label htmlFor="nome">
          Nome
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Seu Nome"
          />
        </label>
        <label htmlFor="Email">
          E-mail
          <input
            type="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu E-mail"
          />
        </label>
        <label htmlFor="senha">
          Senha
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Crie seu senha"
          />
        </label>

        <button type="submit">Criar minha conta!</button>
      </Form>
    </Container>
  );
}
