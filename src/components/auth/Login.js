import React, {Fragment, useState} from 'react';
import { Form, Button} from "react-bootstrap";
import axios from 'axios';
import decode from 'jwt-decode';
/*import  "./technical.css";*/


const LoginForm = (props) => {
    

        const [formData, setFormData] = useState({
  
            email: '',
            password: ''
          });

          const { email, password} = formData;


          const onChange = e =>
            setFormData({ ...formData, [e.target.name]: e.target.value });
  
  
      const onSubmit = async e => {
          e.preventDefault();
      
          let config = {
              headers: {
              'Content-Type': 'application/json'
              }
          };
          console.log(config)
      
          let data = {
              "email": email,
              "password": password
          };
      
          axios
              .post('https://peddirst.herokuapp.com/api/user/login', data, config)
              .then(response => {
                  console.log(response, "response")
              let decodeddata = decode(response.data.token);
              console.log(decodeddata);
              sessionStorage.setItem('token', response.data.token);
              props.history.push('/order');
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
        <div className="technical">
            <h1>Login</h1>
            {formData.errormsg}
            <Form>
                

                <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control name="email" type="email" value={email} placeholder="name@example.com" onChange={e => onChange(e)} />
                </Form.Group>

                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="text" name="password" value={password} onChange={e => onChange(e)} />
                </Form.Group>
            
                
           
                <Button variant="secondary" size="lg" onClick={e => onSubmit(e)}>
                    Login
                </Button>
            </Form>
        </div>

        
        
  );
};


export default LoginForm;