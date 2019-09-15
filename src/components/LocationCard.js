import React from "react";
import { Card } from "semantic-ui-react";

export default function LocationCard({ name, type, dimension, residents }) {
  return (
    <Card>
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>
          {type} - {dimension}
        </Card.Meta>
      </Card.Content>

      <Card.Content>{residents.length} residents</Card.Content>
    </Card>
  );
}
