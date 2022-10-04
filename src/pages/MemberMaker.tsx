import { useState, FC } from 'react'
import DungeonNavBar from '../components/DungeonNavBar';
import NewMemberForm from '../components/NewMemberForm';
import { Container, Row, Col } from 'react-bootstrap';
import PartyCard from '../components/PartyCard';


const MemberMaker: FC = ()=>{


  return (
    <>
      <DungeonNavBar />
      <Container>
        <Row>
          <Col xs={4}>
           <NewMemberForm />
          </Col>
          <Col style={{height:"100vw", overflowY: "scroll"}}>
            <div>sajdklsajdskaj</div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default MemberMaker;
