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

function Password(){


    const [formValues, setFormValues] = useState({password:""});

    const [validationStates, setValidationStates] = useState({ passwordState: true});

    const handlePasswordChange = ((e) => {
        setFormValues({...formValues, password: e.target.value})
        setValidationStates({ ...validationStates, passwordState: validatePassword(e.target.value)})
    });

    const validatePassword = (password) => {
        return password.length >= 6;
      };
    
    const handleAction = (() => {

    });

    return (

        <Col>
            <Card style={{ width: "18rem" }}>
                <Card.Body className="mb-3">
                    <Card.Title>correo</Card.Title>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Ingresa tu contraseña"  onChange={handlePasswordChange} value={formValues.password}/>
                        { !validationStates.passwordState && (<Form.Text className="text-muted">Your password should be 6 char long</Form.Text>) }
                        </Form.Group>
                    </Form>
                    <hr></hr>
                    <Row>
                        <Button variant="primary" onClick={handleAction}>
                        Siguiente
                        </Button>
                    </Row>
                </Card.Body>
            </Card>
        </Col>
        
      ); 
};

export default Password;