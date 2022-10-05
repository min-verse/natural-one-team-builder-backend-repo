import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setParty } from '../state/party';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const NewPartyForm: FC = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    interface PartyObj {
        partyName: string;
        campaignName: string;
        dmName: string;
        description: string;
        userId: number;
    }

    function onPartySubmit(e: React.SyntheticEvent): void {
        e.preventDefault();
        const target = e.target as typeof e.target & {
            partyName: { value: string };
            campaignName: { value: string };
            dmName: { value: string };
            description: { value: string };
            userId: { value: number };
        };

        const newParty: PartyObj = {
            partyName: target.partyName.value,
            campaignName: target.campaignName.value,
            dmName: target.dmName.value,
            description: target.description.value,
            //placeholder userId value
            userId: 2
        }

        fetch("http://localhost:9292/parties", {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify(newParty)
        }).then(res => res.json())
          .then((objRes) => {
            console.log(objRes);
              dispatch(setParty(objRes));
              navigate("/add-member");
            }
          );

    }

    return (
        <Card className="card-component" border="warning" bg="dark" style={{width:"100%", height:"100%"}}>
        <Card.Header>Make a New Party</Card.Header>
        <Card.Body>
         <Form style={{backgroundColor:'#212529', color:'white', borderColor:'yellow', padding:20, height:'100%'}} onSubmit={onPartySubmit}>
             <Form.Group className="mb-3" controlId="partyName">
                 <Form.Label>Party Name</Form.Label>
                 <Form.Control placeholder="Enter a name for your party" />
             </Form.Group>

             <Form.Group className="mb-3" controlId="campaignName">
                 <Form.Label>Campaign</Form.Label>
                 <Form.Control placeholder="Enter campaign type" />
             </Form.Group>

             <Form.Group className="mb-3" controlId="dmName">
                 <Form.Label>Game/Dungeon Master</Form.Label>
                 <Form.Control placeholder="Enter DM name here" />
             </Form.Group>

             <Form.Group className="mb-3" controlId="description">
                 <Form.Label>Description</Form.Label>
                 <Form.Control as="textarea" aria-label="With textarea" placeholder="Enter a detailed description of your party and campaign here." style={{ height: 150 }} />
             </Form.Group>

             <Button variant="primary" type="submit">
                 Submit
             </Button>
        </Form>
        </Card.Body>
      </Card>
        // <Form style={{backgroundColor:'#212529', color:'white', borderColor:'yellow', padding:20, height:'100%'}} onSubmit={onPartySubmit}>
        //     <Form.Group className="mb-3" controlId="partyName">
        //         <Form.Label>Party Name</Form.Label>
        //         <Form.Control placeholder="Enter a name for your party" />
        //     </Form.Group>

        //     <Form.Group className="mb-3" controlId="campaignName">
        //         <Form.Label>Campaign</Form.Label>
        //         <Form.Control placeholder="Enter campaign type" />
        //     </Form.Group>

        //     <Form.Group className="mb-3" controlId="dmName">
        //         <Form.Label>Game/Dungeon Master</Form.Label>
        //         <Form.Control placeholder="Enter DM name here" />
        //     </Form.Group>

        //     <Form.Group className="mb-3" controlId="description">
        //         <Form.Label>Description</Form.Label>
        //         <Form.Control as="textarea" aria-label="With textarea" placeholder="Enter a detailed description of your party and campaign here." style={{ height: 150 }} />
        //     </Form.Group>

        //     <Button variant="primary" type="submit">
        //         Submit
        //     </Button>
        // </Form>
    );
}

export default NewPartyForm;