import React, {FC} from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setParty } from '../state/party';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

interface MemberCardProps{
    id:number;
    character_name: string;
    player_name: string;
    class_name: string;
    race: string;
    level:number;
    alignment:string;
    party_id: number;
}

const MemberCard:FC<MemberCardProps> =({id,character_name, player_name, class_name, race,level,alignment})=>{
  const navigate = useNavigate();
  const dispatch = useDispatch();

//   function handleEdit():void{
//     const editPartyObj: any = {
//       id,
//       name,
//       campaign,
//       DM,
//       description
//     };
//     dispatch(setParty(editPartyObj));
//     navigate("/edit-party");
//   }
  
  return (
    <Card className="card-component" border="warning" bg="dark" style={{marginBottom:20}}>
      <Card.Header>{character_name}</Card.Header>
      <Card.Body>
        <Card.Title><em>Player Name:</em> {player_name}</Card.Title>
        <Card.Text>Level: {level} </Card.Text>
        <Card.Text>Class: {class_name} </Card.Text>
        <Card.Text>Race: {race} </Card.Text>
        <Card.Text>Alignment: {alignment}</Card.Text>
        <Button variant="warning" style={{marginRight:5, marginBottom:5}}>Edit</Button>
        <Button variant="warning" style={{marginRight:5, marginBottom:5}}>Delete</Button>
      </Card.Body>
    </Card>
  );
}

export default MemberCard;