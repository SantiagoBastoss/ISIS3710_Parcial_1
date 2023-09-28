import React from 'react';
import './index.css';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import Form from 'react-bootstrap/Form';

function Login(){


    const [formValues, setFormValues] = useState({email:""});

    const [validationStates, setValidationStates] = useState({ emailState: true});

    const handleEmailChange = ((e) => {
        setFormValues({...formValues, email: e.target.value})
        setValidationStates({ ...validationStates, emailState: validateEmail(e.target.value)})
    });

    const validateEmail = (email) => {
        return /\S+@\S+\.\S+/.test(email);
      };
    
    const handleAction = (() => {

    });

    return (

        <Col>
            <Card style={{ width: "18rem" }}>
                <Card.Body className="mb-3">
                    <Card.Title>Acceder</Card.Title>
                    <Card.Text>Usa tu Cuenta de UniAlpes</Card.Text>

                    <Form>
                        <Form.Group className="mb-6" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Correo electrónico" onChange={handleEmailChange} value={formValues.email}/>
                        { !validationStates.emailState && <Form.Text className="text-muted">Your email should follow an established format.</Form.Text>}
                        </Form.Group>
                    </Form>
                    <hr></hr>
                    <Row>
                        <Button variant="primary">
                        Crear cuenta
                        </Button>
                        <Button variant="primary" onClick={handleAction}>
                        Siguiente
                        </Button>
                    </Row>
                </Card.Body>
            </Card>
        </Col>
        
      ); 
};

export default Login;