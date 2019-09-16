import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

export default function CharacterCard(props) {
  return (
    <Card>
      <Image src={props.image} alt={props.name} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{props.name}</Card.Header>
        <Card.Meta>Status: {props.status}</Card.Meta>
        <Card.Meta>Species: {props.species}</Card.Meta>
      </Card.Content>

      <Card.Content>
        <Card.Description>Location: {props.location}</Card.Description>
        <Card.Description>Origin: {props.origin}</Card.Description>
      </Card.Content>

      <Card.Content>
        <Icon name="user" />
        {props.episode.length} Episodes
      </Card.Content>
    </Card>
  );
}
