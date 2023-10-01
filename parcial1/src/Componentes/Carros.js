import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carro from './Carro';
import Detail from './Detail';
import Button from "react-bootstrap/Button";
import localeEsLabels from "../locales/es";
import localeEnLabels from "../locales/en";
const { useEffect, useState } = require("react");

function Carros () {

   const [carros, setCarros] = useState([]);

   const [formattedLabel, setFormattedLabel] = useState(localeEsLabels);

    const formatSpanish =(() => {
        setFormattedLabel(localeEsLabels);    
    });

    const formatEnglish =(() => {
        setFormattedLabel(localeEnLabels);
    });

   const handleClick = (() => {
    console.log("selecc");
    });

   useEffect(()=>{
       const URL = "https://raw.githubusercontent.com/SantiagoBastoss/ISIS3710_Parcial_1/main/parcial1/src/datos.json";
       fetch(URL).then(data => data.json()).then(data => {
           setCarros(data);
       })
   }, []);

   

console.log(formattedLabel)

   return(

        <div className="container">
            
            <div className="row">
                <div class="col-sm">
                    <h1>{formattedLabel["Listado"]}</h1>
                    
                    <hr></hr>
                    <Row>
                        {carros.map((carro) => <Col><Carro carro={carro} key={carro.carModel} onClick={handleClick}/></Col>)} 
                                  
                    </Row>
                </div>
            </div>

            <div className="row">
                <div class="col-sm">
                    <Button variant="secondary" onClick={formatSpanish}> {formattedLabel["Español"]} </Button>
                    <Button variant="secondary" onClick={formatEnglish}> {formattedLabel["Inglés"]} </Button>
                </div>
            </div>
        </div>
   );
}

export default Carros;