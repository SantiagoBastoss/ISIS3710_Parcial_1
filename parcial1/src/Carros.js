import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carro from './Carro';

const { useEffect, useState } = require("react");

function Carros () {

   const [carros, setCarros] = useState([]);

   const handleClick = (() => {
    console.log("selecc");
    });

   useEffect(()=>{
       const URL = "https://raw.githubusercontent.com/SantiagoBastoss/ISIS3710_Parcial_1/main/parcial1/src/datos.json";
       fetch(URL).then(data => data.json()).then(data => {
           setCarros(data);
       })
   }, []);

   return(

    <div class="container">
        <div class="row">
            <div class="col-sm">
                <h1>Listado de carros</h1>
                <hr></hr>
                <Row>
                    {carros.map(carro => <Col><Carro carro={carro} key={carro.carModel} onClick={handleClick}/></Col>)}               
                </Row>
            </div>
        
            <div class="col-sm">
                
            </div>
        </div>
    </div>
   );
}

export default Carros;