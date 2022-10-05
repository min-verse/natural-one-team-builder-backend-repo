import React, { FC } from 'react';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';

interface PartyObj{
    id: number;
    name: string;
    campaign: string;
    description: string;
    DM: string;
    user_id: number;
}
interface MemberObj {
    id: number;
    character_name: string;
    player_name: string;
    class_name: string;
    race: string;
    level: number;
    alignment: string;
}
interface PartyCardProps {
    party: {};
    members: MemberObj[];
}

const PartyDetails: FC<PartyCardProps> = ({party, members}) => {

    const {id, name, campaign, description, DM} = party;

    return (
        <Card className="card-component" border="warning" bg="dark" style={{ width: "100%", height: "100%", color: "white" }}>
            <Card.Header>{campaign}</Card.Header>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text><em>DM:</em> {DM}</Card.Text>
                <Card.Text>
                    {description}
                </Card.Text>
                <Card.Title>Party Members</Card.Title>
                <Table style={{ color: 'white' }}>
                    <thead>
                        <tr>
                            <th>Character</th>
                            <th>Player</th>
                            <th>Class</th>
                            <th>Race</th>
                            <th>Level</th>
                            <th>Alignment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {members.map((person, index)=>{
                            return [
                                <tr key={index}>
                                    <td>{person.character_name}</td>
                                    <td>{person.player_name}</td>
                                    <td>{person.class_name}</td>
                                    <td>{person.race}</td>
                                    <td>{person.level}</td>
                                    <td>{person.alignment}</td>
                                </tr>
                            ];
                        })}
                        {/* <tr>
                            <td>character 1</td>
                            <td>player 1</td>
                            <td>bard</td>
                            <td>half-elf</td>
                            <td>3</td>
                            <td>Lawful Neutral</td>
                        </tr>
                        <tr>
                            <td>character 2</td>
                            <td>player 2</td>
                            <td>rogue</td>
                            <td>half-orc</td>
                            <td>5</td>
                            <td>Chaotic Good</td>
                        </tr>
                        <tr>
                            <td>character 3</td>
                            <td>player 3</td>
                            <td>fighter</td>
                            <td>human</td>
                            <td>2</td>
                            <td>Neutral Evil</td>
                        </tr> */}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
}

export default PartyDetails;