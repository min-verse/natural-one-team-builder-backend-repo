import { useState, FC, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import DungeonNavBar from '../components/DungeonNavBar';
import PartyDetails from '../components/PartyDetails';
import { Container, Row, Col } from 'react-bootstrap';
import PartyCard from '../components/PartyCard';


const DungeonHome: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // interface MemberObj {
  //   characterName: string;
  //   playerName: string;
  //   nameOfClass: string;
  //   nameOfRace: string;
  //   level: number;
  //   alignment: string;
  //   partyId: number;
  // }
  interface PartyCardProps {
    id: number;
    name: string;
    campaign: string;
    DM: string;
    description: string;
    members: [];
  }

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

  const [parties, setParties] = useState([]);

  useEffect(() => {
    fetch('http://localhost:9292/parties/first')
      .then(res => res.json())
      .then((firstParty) => {
        console.log(firstParty);
        setCurrentParty(firstParty);
      });

    fetch('http://localhost:9292/parties')
      .then(res => res.json())
      .then((parties) => {
        console.log(parties);
        setParties(parties);
      });
  }, []);

  function showDetails(id: number): void {
    fetch(`http://localhost:9292/parties/${id}`)
    .then(res=>res.json())
    .then((data)=>{
      setCurrentParty(data);
    });
  }

  return (
    <>
      <DungeonNavBar />
      <Container>
        <Row>
          <Col xs={4} style={{ height: "100vw", overflowY: "scroll" }}>
            {parties.map(({ id, name, campaign, DM, description, members }) => {
              return <PartyCard
                key={id}
                id={id}
                name={name}
                campaign={campaign}
                DM={DM}
                description={description}
                members={members}
                showDetails={showDetails}
              />;
            })}
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

export default DungeonHome;
