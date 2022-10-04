import { useState, FC } from 'react'
import DungeonNavBar from '../components/DungeonNavBar';
import NewPartyForm from '../components/NewPartyForm';
import { Container, Row, Col } from 'react-bootstrap';
import PartyCard from '../components/PartyCard';


const PartyMaker: FC = ()=>{


  return (
    <>
      <DungeonNavBar />
      <Container>
        <Row>
          <Col xs={4}>
           <NewPartyForm />
          </Col>
          <Col style={{height:"100vw", overflowY: "scroll"}}>
            <div>sajdklsajdskaj</div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default PartyMaker;
