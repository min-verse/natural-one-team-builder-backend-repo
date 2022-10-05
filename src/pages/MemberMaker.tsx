import { useState, FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import DungeonNavBar from '../components/DungeonNavBar';
import NewMemberForm from '../components/NewMemberForm';
import { Container, Row, Col } from 'react-bootstrap';
import MemberCard from '../components/MemberCard';
import PartyCard from '../components/PartyCard';


const MemberMaker: FC = ()=>{
  interface MemberObj {
    character_name: string;
    player_name: string;
    class_name: string;
    race: string;
    level: number;
    alignment: string;
    party_id: number;
  }

  const partyState = useSelector((state: any) => state.party);
  const [currentMembers, setCurrentMembers] = useState<MemberObj>([]);

  useEffect(()=>{
    fetch(`http://localhost:9292/parties/${partyState.stats.id}`)
    .then(res=>res.json())
    .then((data)=>{
      setCurrentMembers(data.members);
    });
  },[]);

  function handleClick():void{
    console.log(partyState);
  }

  function handleNewMember(newObj: MemberObj):void{
    setCurrentMembers((prevMembers)=>{
      return [...prevMembers,newObj];
    });
  }

  return (
    <>
      <DungeonNavBar />
      <Container>
        <Row>
          <h1 onClick={handleClick}>Click this</h1>
          <Col xs={4}>
           <NewMemberForm handleNewMember={handleNewMember}/>
          </Col>
          <Col style={{height:"100vw", overflowY: "scroll"}}>
            {currentMembers.map(({id, character_name, player_name, class_name, race, level, alignment, party_id})=>{
              return (
                <MemberCard 
                key={id}
                id={id}
                character_name={character_name}
                player_name={player_name}
                class_name={class_name}
                race={race}
                level={level}
                alignment={alignment}
                party_id={partyState.stats.id}
                />
              );
            })}
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default MemberMaker;
