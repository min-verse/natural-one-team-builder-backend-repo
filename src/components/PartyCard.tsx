import React, {FC} from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setParty } from '../state/party';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

interface PartyCardProps{
    id:number;
    name: string;
    campaign: string;
    DM: string;
    description: string;
    members:[];
    showDetails: (id:number)=>void;
}

const PartyCard:FC<PartyCardProps> =({id,name, campaign, DM, description,showDetails})=>{
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleEdit():void{
    const editPartyObj: any = {
      id,
      name,
      campaign,
      DM,
      description
    };
    dispatch(setParty(editPartyObj));
    navigate("/edit-party");
  }

  function handleDelete():void{
    fetch(`http://localhost:9292/parties/${id}`,{
      method:'DELETE',
    });
    //check this to see if it works
    navigate(0);
  }
  
  return (
    <Card className="card-component" border="warning" bg="dark" style={{marginBottom:20}}>
      <Card.Header>{campaign}</Card.Header>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text><em>DM:</em> {DM}</Card.Text>
        <Card.Text style={{height:100, overflow:"hidden"}}>
          {description}
        </Card.Text>
        <Button onClick={()=>showDetails(id)} variant="warning" style={{marginRight:5, marginBottom:5}}>Full Details</Button>
        <Button onClick={handleEdit} variant="warning" style={{marginRight:5, marginBottom:5}}>Edit</Button>
        <Button onClick={handleDelete} variant="warning" style={{marginRight:5, marginBottom:5}}>Delete</Button>
      </Card.Body>
    </Card>
  );
}

export default PartyCard;