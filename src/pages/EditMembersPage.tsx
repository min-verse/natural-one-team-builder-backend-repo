import { useState, FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import EditPartyForm from '../components/EditPartyForm';
import DungeonNavBar from '../components/DungeonNavBar';
import PartyDetails from '../components/PartyDetails';
import MemberCard from '../components/MemberCard';
import NewPartyForm from '../components/NewPartyForm';
import { Container, Row, Col } from 'react-bootstrap';
import NewMemberForm from '../components/NewMemberForm';
import PartyCard from '../components/PartyCard';
import Button from 'react-bootstrap';

const EditMembersPage: FC = () => {

    interface MemberObj {
        id: number;
        character_name: string;
        player_name: string;
        class_name: string;
        race: string;
        level: number;
        alignment: string;
        party_id: number;
    }

    const partyState = useSelector((state: any) => state.party);
    const [currentMembers, setCurrentMembers] = useState(
        [{
            id: 0,
            character_name: "Loading",
            player_name: "Loading",
            class_name: "Loading",
            race: "Loading",
            level: 0,
            alignment: "Loading",
            party_id: 0
        }]);

    useEffect(() => {
        fetch(`http://localhost:9292/parties/${partyState.stats.id}`)
            .then(res => res.json())
            .then((data) => {
                setCurrentMembers(data.members);
            });
    }, []);

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

    function handleNewMember(newObj: MemberObj): void {
        setCurrentMembers((prevMembers) => {
            return [...prevMembers, newObj];
        });
    }

    return (
        <>
            <DungeonNavBar />
            <Container>
                <Row>
                    <Col xs={4}>
                        <NewMemberForm handleNewMember={handleNewMember} />
                    </Col>
                    <Col style={{ height: "100vw", overflowY: "scroll" }}>
                        {currentMembers.map(({ id, character_name, player_name, class_name, race, level, alignment, party_id }) => {
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

export default EditMembersPage;
