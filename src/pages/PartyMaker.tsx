import { useState, FC } from 'react'
import DungeonNavBar from '../components/DungeonNavBar';
import NewPartyForm from '../components/NewPartyForm';
import { Container, Row, Col } from 'react-bootstrap';
import PartyCard from '../components/PartyCard';


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

  return (
    <>
      <DungeonNavBar />
      <Container>
        <Row>
          <Col xs={4}>
           <NewPartyForm />
          </Col>
          <Col style={{height:"100vw", overflowY: "scroll"}}>
          {/* {exampleArray.map(({id, name, campaign, DM, description}) => {
              return <PartyCard 
              key={id}
              id={id}
              name={name}
              campaign={campaign}
              DM={DM}
              description={description}
              />;
            })} */}
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default PartyMaker;
