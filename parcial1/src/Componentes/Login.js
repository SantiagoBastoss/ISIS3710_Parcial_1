import React from 'react';
import '../index.css';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/card";
import Col from "react-bootstrap/Col";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
import localeEsLabels from "../locales/es";
import localeEnLabels from "../locales/en";

function Login(){

    const [formValues, setFormValues] = useState({email:"", password:""});

    const [validationStates, setValidationStates] = useState({ emailState: true, passwordState:true});

    const [formattedLabel, setFormattedLabel] = useState(localeEsLabels);

    const [cardValues, setCardValues] = useState({cardTitle:"Acceder", cardText:"Usa tu cuenta de UniAlpes", esPassword: false})

    const handleEmailChange = ((e) => {
        setFormValues({...formValues, email: e.target.value})
        setValidationStates({ ...validationStates, emailState: validateEmail(e.target.value)})
    });

    const validateEmail = (email) => {
        return /\S+@\S+\.\S+/.test(email);
    };

    const handlePasswordChange = ((e) => {
        setFormValues({...formValues, password: e.target.value})
        setValidationStates({ ...validationStates, passwordState: validatePassword(e.target.value)})
    });

    const validatePassword = (password) => {
        return password.length >= 6;
    };
    
    const handleAction = (() => {

        if(!cardValues.esPassword && validateEmail(formValues.email)){
            setCardValues({cardTitle: formValues.email, cardText: "", esPassword: true});
        } else if(validatePassword(formValues.password)){
            console.log("oui");
        }
    });

    const formatSpanish =(() => {
        setFormattedLabel(localeEsLabels);
        if(!cardValues.esPassword){
            setCardValues({cardTitle: formattedLabel["Acceder"], cardText: formattedLabel["Cuenta"], esPassword: false});
        }
        
    });

    const formatEnglish =(() => {
        setFormattedLabel(localeEnLabels);
        if(!cardValues.esPassword){
            setCardValues({cardTitle: formattedLabel["Acceder"], cardText: formattedLabel["Cuenta"], esPassword: false});
        }
    });

    return (
        <div className="container">
            
            <Col align="center">
                <br></br>
                <br></br>
                <Card style={{ width: "18rem" }} align="center">
                    <Card.Body className="mb-3">
                        <Card.Title>{cardValues.cardTitle}</Card.Title>
                        <Card.Text>{cardValues.cardText}</Card.Text>
                        <hr></hr>
                        { !cardValues.esPassword && <Form>
                            <Form.Group className="mb-6" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder={formattedLabel["Correo"]} onChange={handleEmailChange} value={formValues.email}/>
                            { !validationStates.emailState && <Form.Text className="text-muted">{formattedLabel["MensajeCorreo"]}</Form.Text>}
                            </Form.Group>
                        </Form> }

                        { cardValues.esPassword && <Form>
                            <Form.Group className="mb-6" controlId="formBasicPassword">
                            <Form.Control type="password" placeholder={formattedLabel["IngresarContraseña"]} onChange={handlePasswordChange} value={formValues.password}/>
                            { !validationStates.passwordState && <Form.Text className="text-muted">{formattedLabel["MensajeContraseña"]}</Form.Text>}
                            </Form.Group>
                        </Form> }
                        <br></br>
                        <Col>
                            <Button variant="primary">{formattedLabel["CrearCuenta"]}</Button>
                            { !cardValues.esPassword && <Button variant="primary" onClick={handleAction}> {formattedLabel["Siguiente"]} </Button> }
                            { cardValues.esPassword && <Link to={"/carros/"}>
                                <Button variant="primary" onClick={handleAction}>
                                    {formattedLabel["Siguiente"]}
                                </Button>
                            </Link> }
                        </Col>
                    </Card.Body>
                </Card>
            </Col>
            
            <br></br>
            <br></br>

            <div className="row">
                <div class="col-sm">
                    <Button variant="secondary" onClick={formatSpanish}> {formattedLabel["Español"]} </Button>
                    <Button variant="secondary" onClick={formatEnglish}> {formattedLabel["Inglés"]} </Button>
                </div>
            </div>
        </div>
      ); 
};

export default Login;