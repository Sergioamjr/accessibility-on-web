import React from "react";
import styled from "styled-components";

export default function FormBase() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          toggleModal();
        }}
      >
        <div>
          <label>Nome:</label>
          <input placeholder="Digite seu nome" />
        </div>
        <div>
          <label>E-mail:</label>
          <input placeholder="Digite seu email" />
        </div>
        <button type="submit">Avançar</button>
      </Form>
      {isOpen && (
        <Modal aria-live="assertive">
          <div>
            <p>Cadastro feito com sucesso.</p>
            <button onClick={() => toggleModal()}>Fechar</button>
          </div>
        </Modal>
      )}
    </div>
  );
}

export function FormNotAccessibly() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          toggleModal();
        }}
      >
        <div>
          <label>Nome:</label>
          <input placeholder="Digite seu nome" />
        </div>
        <div>
          <label>E-mail:</label>
          <input placeholder="Digite seu email" />
        </div>
        <button type="submit">Avançar</button>
      </Form>
      {isOpen && (
        <Modal>
          <div>
            <p>Cadastro feito com sucesso.</p>
            <button onClick={() => toggleModal()}>Fechar</button>
          </div>
        </Modal>
      )}
    </div>
  );
}

const Form = styled.form`
  button {
    cursor: pointer;
    background: rgb(0, 135, 255);
    border: 0px;
    color: rgb(255, 255, 255);
    border-radius: 3px;
    padding: 12px 30px;
    font-size: 18px;
    width: 100%;
  }
  background: #fff;
  max-width: 400px;
  padding: 15px;
  border-radius: 5px;
  border: 1px solid #ccc;
  label,
  p {
    font-size: 16px;
    margin-bottom: 5px;
    display: block;
  }
  input {
    width: 100%;
    display: block;
    padding: 15px;
    border: 1px solid #ccc;
    color: #333;
    font-size: 18px;
    margin-bottom: 30px;
    border-radius: 4px;
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  right: 0;
  background: #292929a3;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  div {
    p {
      margin: 0;
      margin-bottom: 15px;
    }
    background: #fff;
    font-size: 20px;
    padding: 20px;
    border-radius: 5px;
  }
  button {
    cursor: pointer;
    background: red;
    border: 0px;
    color: rgb(255, 255, 255);
    border-radius: 3px;
    padding: 12px 30px;
    font-size: 18px;
    width: 100%;
  }
`;
