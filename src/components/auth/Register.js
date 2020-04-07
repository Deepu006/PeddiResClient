import React, {Fragment, useState} from 'react';
import { Form, Button} from "react-bootstrap";
import axios from 'axios';
import decode from 'jwt-decode';
/*import  "./technical.css";*/


const RegisterForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        password: '',
        password1: ''
      });


    const { name, email, mobile, password, password1 } = formData;

    const onChange = e =>
        setFormData({ ...formData, [e.target.name]: e.target.value });


    const onSubmit = async e => {
        console.log("hello");
        e.preventDefault();
    
        let config = {
            headers: {
            'Content-Type': 'application/json'
            }
        };
        console.log(config)
    
        let data = {
            "name": name,
            "email": email,
            "password": password,
            "password1": password1,
            "mobile": mobile
        };
    
        axios
            .post('http://localhost:8001/api/user/register', data, config)
            .then(response => {
                console.log(response, "response")
            // let decodeddata = decode(response.data.token);
            // console.log(decodeddata);
            // sessionStorage.setItem('token', response.data.token);
            })
            .catch(error => {
                console.log('error ', error);
                console.log(error.response)
            
                setFormData({
                    ...formData,
                    errormsg: error.response.data.error[0].msg
                });
                });
    };
    return (
        <Fragment>


            <div className="technical">
                <h1>Register</h1>
                    {formData.errormsg}
                
                    <Form onSubmit={e => onSubmit(e)}>
`                    <Form.Group controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control  type="text" name="name" value={name} onChange={e => onChange(e)} />
                    </Form.Group> 

                    <Form.Group controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control name="email" type="email" value={email} placeholder="name@example.com" onChange={e => onChange(e)}/>
                    </Form.Group>

                    <Form.Group controlId="mobile">
                        <Form.Label>Mobile</Form.Label>
                        <Form.Control type="mobile" name="mobile" value={mobile} placeholder="" onChange={e => onChange(e)} />
                    </Form.Group>

                    <Form.Group controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="text" name="password" value={password} onChange={e => onChange(e)} />
                    </Form.Group>

                    <Form.Group controlId="password">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="text" name="password1" value={password1} onChange={e => onChange(e)} />
                    </Form.Group>`
                     <Button variant="secondary" size="lg" onClick={e => onSubmit(e)}>
                        Register
                    </Button>
                </Form>
                    
            
                   
          
        
        </div>
        </Fragment>
        
        
  );
};


export default RegisterForm;