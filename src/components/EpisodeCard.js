import React from "react";
import { Card } from "semantic-ui-react";

export default function LocationCard({ name, date, episode, characters }) {
  return (
    <Card>
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>
          {episode} - {date}
        </Card.Meta>
      </Card.Content>

      <Card.Content>{characters.length} characters</Card.Content>
    </Card>
  );
}
