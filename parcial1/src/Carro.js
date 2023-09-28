import Card from 'react-bootstrap/Card';
import { useState } from "react";

function Carro(props){

    const [ValidationSelected, setValidationSelected] = useState({ selected: false});

    

   return(
       <Card style={{ width: '18rem', height: '24rem' }} className="mb-3">
           <Card.Img style={{ height: '14rem' }}  variant="top" src={props.carro.image} alt={props.carro.description} />
           <Card.Body>
               <Card.Title>{props.carro.partName}</Card.Title>
               <Card.Text>
                    <h6>{props.carro.carMaker}</h6>
                    <h8>{props.carro.price}-{props.carro.carYear}</h8>
               </Card.Text>
           </Card.Body>
       </Card>
   );
}

export default Carro;