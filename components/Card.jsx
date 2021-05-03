import React from "react";
import styled from "styled-components";

export default function Card({ title, price }) {
  return (
    <Box tabIndex={0} role="presentation">
      <div>
        <p>{title}</p>
        <p className="price" aria-label={`${price} reais`}>
          R${price}
        </p>
        <button>Adicionar ao carrinho</button>
      </div>
    </Box>
  );
}

export function CardNotAccessibly({ title, price }) {
  return (
    <Box>
      <div>
        <p>{title}</p>
        <p className="price">R${price}</p>
        <button>Adicionar ao carrinho</button>
      </div>
    </Box>
  );
}

const Box = styled.div`
  display: flex;
  background: #fff;
  margin-bottom: 15px;
  border: 1px solid #cecece;
  border-radius: 3px;
  padding: 15px;
  max-width: 300px;
  flex-direction: column;
  button {
    background: rgb(0, 135, 255);
    border: 0px;
    color: rgb(255, 255, 255);
    border-radius: 3px;
    padding: 12px 30px;
    font-size: 18px;
    width: 100%;
  }
  p {
    margin: 0;
    margin-bottom: 5px;
    font-size: 22px;
    color: #333;
  }
  .price {
    color: #8a8a8a;
    font-size: 22px;
  }
  img {
    width: 100%;
    max-width: 100px;
    margin-right: 10px;
  }
`;
