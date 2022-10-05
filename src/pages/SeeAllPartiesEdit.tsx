import { useState, FC, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import DungeonNavBar from '../components/DungeonNavBar';
import PartyDetails from '../components/PartyDetails';
import { Container, Row, Col } from 'react-bootstrap';
import PartyCard from '../components/PartyCard';


const SeeAllPartiesEdit: FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    interface PartyCardProps {
        id: number;
        name: string;
        campaign: string;
        DM: string;
        description: string;
        members: [];
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
                    <Col xs={12} style={{ height: "100vw", overflowY: "scroll" }}>
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
                </Row>
            </Container>
        </>
    )
}

export default SeeAllPartiesEdit;
