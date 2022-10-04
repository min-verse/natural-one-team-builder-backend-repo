import React, {FC} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const NewMemberForm: FC = ()=>{
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Character Name</Form.Label>
        <Form.Control placeholder="Enter a character name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Player Name</Form.Label>
        <Form.Control placeholder="Enter player name" />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Class Name</Form.Label>
        <Form.Control placeholder="Enter your member's class" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Race</Form.Label>
        <Form.Control placeholder="Enter your member character's race" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Level</Form.Label>
        <Form.Control placeholder="Enter your member character's race" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Alignment</Form.Label>
        <Form.Select placeholder="Select their alignment">
        <option> </option>
        <option>Lawful Good</option>
        <option>Neutral Good</option>
        <option>Chaotic Good</option>
        <option>Lawful Neutral</option>
        <option>True Neutral</option>
        <option>Chaotic Neutral</option>
        <option>Lawful Evil</option>
        <option>Neutral Evil</option>
        <option>Chaotic Evil</option>
      </Form.Select>
      </Form.Group>

      <Button style={{marginTop:10}} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default NewMemberForm;