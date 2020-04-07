import React from 'react';
import { Form, Button} from "react-bootstrap";
import  "./technical.css";


class TechnicalQueryForm extends React.Component {

    constructor()
    {
        super()
        this.state={
            name:"",
            email:"",
            query:""
        }

        this.handleNamechange=this.handleNamechange.bind(this)
        this.handleEmailChange=this.handleEmailChange.bind(this)
        this.handleQueryChange=this.handleQueryChange.bind(this)  
        this.submitData=this.submitData.bind(this)      
    }
    handleNamechange(e)
    {
        
        this.setState({
            name:e.target.value
        })
        
    }
    handleEmailChange(e)
    {
        this.setState({
            email:e.target.value
        })
            
    }

    handleQueryChange(e)
    {
        this.setState({
            query:e.target.value
        })
            
    }

    submitData()
    {
      
        fetch("http://localhost:5000/api/technicalqueries",{
            method:"POST",
        
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify(this.state)

        }).then(res=>res.json()).then(data=>
        {
            console.log(data)
            if(data.success !== 0)
            {
                document.getElementById("name").value="";
                document.getElementById("email").value = "";
                document.getElementById("query").value = "";
                alert("Data insserted successfully");
            }
            else
            {
                alert("Error inserting data");
            }
            
        })
    }
    render(){
        
        return (
            
            <div className="technical">
                <h1>Contact Us</h1>
                <Form>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" id="name"  placeholder="Name" onChange={this.handleNamechange} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" id="email" placeholder="name@example.com"  onChange={this.handleEmailChange}/>
                    </Form.Group>
                
                    
                    <Form.Group>
                        <Form.Label>Your Message</Form.Label>
                        <Form.Control id="query" as="textarea" rows="3" onChange={this.handleQueryChange}/>
                    </Form.Group>
                    <Button onClick={this.submitData} variant="secondary" size="lg">
                        Submit
                    </Button>
                </Form>
            </div>

            
            
        );
    }
    
};


export default TechnicalQueryForm;