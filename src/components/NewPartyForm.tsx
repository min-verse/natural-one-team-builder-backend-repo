import React, {FC} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const NewPartyForm: FC = ()=>{
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Party Name</Form.Label>
        <Form.Control placeholder="Enter a name for your party" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Campaign</Form.Label>
        <Form.Control placeholder="Enter campaign type" />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Game/Dungeon Master</Form.Label>
        <Form.Control placeholder="Enter DM name here" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" aria-label="With textarea" placeholder="Enter a detailed description of your party and campaign here." style={{height:150}}/>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default NewPartyForm;