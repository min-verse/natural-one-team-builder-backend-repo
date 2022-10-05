import { useState, useEffect, FC } from 'react'
import DungeonNavBar from '../components/DungeonNavBar';
import NewPartyForm from '../components/NewPartyForm';
import { Container, Row, Col } from 'react-bootstrap';
import PartyCardAllDisplay from '../components/PartyCardAllDisplay';


const PartyMaker: FC = ()=>{

 interface PartyCardProps{
    id:number;
    name: string;
    campaign: string;
    DM: string;
    description: string;
    members:[];
    showDetails: (id:number)=>void;
}

const [parties, setParties] = useState([]);

useEffect(() => {
  fetch('http://localhost:9292/parties')
    .then(res => res.json())
    .then((parties) => {
      console.log(parties);
      setParties(parties);
    });
}, []);

  return (
    <>
      <DungeonNavBar />
      <Container>
        <Row>
          <Col xs={4}>
           <NewPartyForm />
          </Col>
          <Col style={{height:"100vw", overflowY: "scroll"}}>
          {parties.map(({ id, name, campaign, DM, description, members }) => {
              return <PartyCardAllDisplay
                key={id}
                id={id}
                name={name}
                campaign={campaign}
                DM={DM}
                description={description}
                members={members}
              />;
            })}
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default PartyMaker;
