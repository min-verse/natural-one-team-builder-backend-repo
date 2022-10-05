import { useState, FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import EditPartyForm from '../components/EditPartyForm';
import DungeonNavBar from '../components/DungeonNavBar';
import PartyDetails from '../components/PartyDetails';
import NewPartyForm from '../components/NewPartyForm';
import { Container, Row, Col } from 'react-bootstrap';
import PartyCard from '../components/PartyCard';
import Button from 'react-bootstrap';

const EditParty: FC = () => {

  const partyState = useSelector((state: any) => state.party);
  const [currentParty, setCurrentParty] = useState({
    party:{
      id: 0,
      name: "Loading",
      campaign: "Loading",
      description: "Loading",
      DM: "Loading",
      user_id: 0
    },
    members: [{
      id: 0,
      character_name: "Loading",
      player_name: "Loading",
      class_name: "Loading",
      race: "Loading",
      level: 0,
      alignment: "Loading"
    }]
  });

  useEffect(()=>{
    fetch(`http://localhost:9292/parties/${partyState.stats.id}`)
    .then(res => res.json())
    .then((data)=>{
      setCurrentParty(data);
    });
  },[]);

  interface PartyCardProps {
    id: number;
    name: string;
    campaign: string;
    DM: string;
    description: string;
    members: [];
    showDetails: (id: number) => void;
  }

  function handleClick(): void {
    console.log(partyState);
  }

  return (
    <>
      <DungeonNavBar />
      <Container>
        <Row>
          <Col xs={4}>
            <EditPartyForm {...partyState} />
          </Col>
          <Col style={{ height: "100vw", overflowY: "scroll" }}>
            <PartyDetails 
              {...currentParty}
            />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default EditParty;
