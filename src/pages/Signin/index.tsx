/* eslint-disable no-use-before-define */
import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import { Container, Content, Background } from './styles';

import logoImg from '../../assets/logo.svg';

const SignIn: React.FC = () => (
  <>
    <Container>
      <Content>
        <img src={logoImg} alt="GoBarber" />

        <form action="">
          <h1>Faça seu login</h1>

          <input placeholder="E-mail" />

          <input type="password" placeholder="Senha" />

          <button type="submit">Entrar</button>

          <a href="forgot">Esqueci minha senha</a>
        </form>

        <a href="forgot">
          <FiLogIn />
          Criar conta
        </a>
      </Content>

      <Background />
    </Container>
  </>
);

export default SignIn;
