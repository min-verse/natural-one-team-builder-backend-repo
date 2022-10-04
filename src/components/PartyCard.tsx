import React, {FC} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

interface PartyCardProps{
    id:number;
    name: string;
    campaign: string;
    DM: string;
    description: string;
}

const PartyCard:FC<PartyCardProps> =({name, campaign, DM, description})=>{
  return (
    <Card className="card-component" border="warning" bg="dark" style={{marginBottom:20}}>
      <Card.Header>{campaign}</Card.Header>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text><em>DM:</em> {DM}</Card.Text>
        <Card.Text style={{height:100, overflow:"hidden"}}>
          {description}
        </Card.Text>
        <Button variant="warning" style={{marginRight:5}}>Full Details</Button>
        <Button variant="warning">Display</Button>
      </Card.Body>
    </Card>
  );
}

export default PartyCard;