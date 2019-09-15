import React from "react";
import styled from "styled-components";
import { Card } from "semantic-ui-react";

// STYLING
const CardContainer = styled.div`
  background: white;
  opacity: 0.7;
  margin: 30px 10px;
  padding: 5px;
  width: 300px;
  border: 1px solid grey;
  border-radius: 5px;
`;

const Image = styled.img`
  max-width: 290px;
`;

const Name = styled.h2`
  font-size: 1.8rem;
`;

const Info = styled.h3`
  font-size: 1.2rem;
`;

export default function CharacterCard(props) {
  return (
    <CardContainer>
      <Image src={props.image} alt={props.name} />
      <Name>{props.name}</Name>
      <h3>Status: {props.status}</h3>
      <h3>Species: {props.species}</h3>
    </CardContainer>
  );
}
