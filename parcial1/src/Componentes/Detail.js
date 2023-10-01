import { useParams } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Row from "react-bootstrap/esm/Row";
import Col from 'react-bootstrap/Col';
import { useState } from "react";
import localeEsLabels from "../locales/es";
import localeEnLabels from "../locales/en";
import Button from "react-bootstrap/Button";

export default function Detail() {

 const params = useParams();
 console.log(params);

 const [formattedLabel, setFormattedLabel] = useState(localeEsLabels);

  const formatSpanish =(() => {
    setFormattedLabel(localeEsLabels);    
  });

  const formatEnglish =(() => {
    setFormattedLabel(localeEnLabels);
  });

 return (
  <div className="container" text_align="center">
    <div className="row" text_align="center">
      <Card style={{ width: '18rem', height: '24rem' }} className="mb-3" align="center">
        
        <div class="col-sm" align="center">
          <Card.Body>
            <Card.Title>
              {params.partName}  
            </Card.Title>

            <hr></hr>

            <Card.Text align="left">
              <Row>
                <Col align="left">
                <h6>{formattedLabel["maker"]}</h6>
                <h6>{formattedLabel["model"]}</h6>
                <h6>{formattedLabel["year"]}</h6>
                <h6>{formattedLabel["available"]}</h6>
                <h6>{formattedLabel["price"]}</h6>
                <h6>{formattedLabel["description"]}</h6>
                </Col>
              
                <Col align="right">
                  <p6> {params.carMaker} </p6>
                  <p> {params.carModel} </p> 
                  <p6> {params.carYear} </p6> 
                  <p> {params.available} </p> 
                  <p6> {params.price} </p6> 
                </Col>
              </Row>
              <Row>
              <hr></hr>
              <p>{params.description}</p>
              </Row>
              
            </Card.Text>
          </Card.Body>       
        </div>
      </Card>
    </div>
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
}