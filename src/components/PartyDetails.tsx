import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';

function PartyDetails() {
    return (
        <Card className="card-component" border="warning" bg="dark" style={{ width: "100%", height: "100%", color: "white" }}>
            <Card.Header>Example Campaign</Card.Header>
            <Card.Body>
                <Card.Title>Example Party Name</Card.Title>
                <Card.Text><em>DM:</em> Example DM Name</Card.Text>
                <Card.Text>
                    Example Description
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
                        <tr>
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
                        </tr>
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
}

export default PartyDetails;