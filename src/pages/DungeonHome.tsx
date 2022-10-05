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


  // const exampleArray: PartyCardProps[] = [
  //   {
  //     id: 1,
  //     name: "Party Poopers",
  //     campaign: "Red Campaign",
  //     DM: "John Johnson",
  //     description: "I had seen little of Holmes lately. My marriage had drifted us away from each other. My own complete happiness, and the home-centred interests which rise up around the man who first finds himself master of his own establishment, were sufficient to absorb all my attention, while Holmes, who loathed every form of society with his whole Bohemian soul, remained in our lodgings in ",
  //     members:[]
  //   },
  //   {
  //     id: 2,
  //     name: "Jewel Lords",
  //     campaign: "Blue Campaign",
  //     DM: "Billy Billson",
  //     description: "“My dear Holmes,” said I, “this is too much. You would certainly have been burned, had you lived a few centuries ago. It is true that I had a country walk on Thursday and came home in a dreadful mess, but as I have changed my clothes I cant imagine how you deduce it. As to Mary Jane, she is incorrigible, and my wife has given her notice, but there, again, I fail to see how you ",
  //     members:[]
  //   },
  //   {
  //     id: 3,
  //     name: "Brooklyn Beasts",
  //     campaign: "Yellow Campaign",
  //     DM: "Greg Gregson",
  //     description: "When I hear you give your reasons,” I remarked, “the thing always appears to me to be so ridiculously simple that I could easily do it myself, though at each successive instance of your reasoning ",
  //     members:[]
  //   },
  //   {
  //     id: 4,
  //     name: "Queens Kings",
  //     campaign: "Orange Campaign",
  //     DM: "Joan Joanston",
  //     description: "ere will call upon you to-night, at a quarter to eight o’clock,” it said, “a gentleman who desires to consult you upon a matter of the very deepest moment. Your recent services to one of the royal houses of Europe have shown that you are one who may safely be trusted with matters which",
  //     members:[]
  //   },
  //   {
  //     id: 5,
  //     name: "Beasts and Bros",
  //     campaign: "Green Campaign",
  //     DM: "Velma Velmason",
  //     description: " entered who could hardly have been less than six feet six inches in height, with the chest and limbs of a Hercules. His dress was rich with a richness which would, in England, be looked upon as akin to bad taste. Heavy bands of astrakhan were slashed across the sleeves and fronts of h",
  //     members:[]
  //   }
  // ];

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
