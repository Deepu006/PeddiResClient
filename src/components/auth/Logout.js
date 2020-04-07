import React from 'react';
import { Form, Button} from "react-bootstrap";
/*import  "./technical.css";*/


const LogoutForm = props => {
    return (
        
        
        <div className="technical">
            <h1>Register</h1>
            <Form>
                <Form.Group controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text"/>
                </Form.Group> 

                <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>

                <Form.Group controlId="mobile">
                    <Form.Label>Mobile</Form.Label>
                    <Form.Control type="mobile" placeholder="" />
                </Form.Group>

                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>

                <Form.Group controlId="password">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="text"  />
                </Form.Group>
                
           
                <Button variant="secondary" size="lg">
                    Logout
                </Button>
            </Form>
        </div>

        
        
  );
};


export default LogoutForm;