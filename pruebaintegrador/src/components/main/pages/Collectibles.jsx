import { useEffect, useState } from "react";
import { Button, Card, CardGroup, Container, Row } from "react-bootstrap";


export const Collectibles =()=>{


    const [productsDB, setproductsDB] = useState([]);
  
    useEffect(()=>{
      fetch("productsDB.json")
        .then(response => response.json()
        .then(datos =>{
          setproductsDB(datos)
        }))
    })
  
         
    return(
  
      <Container>
  
        <Row xs={1} md={2} className="g-4">
  
          {productsDB.map(({id,name, price, image}) => (
            <CardGroup>
            <Card className="text-center" style={{ width: '18rem' }}>
                
                <Card.Header>Precio: {price}</Card.Header>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                    Descripción producto
                    </Card.Text>
                    <Button variant="primary">Agregar al carrito</Button>
                    <Button variant="primary">Comprar</Button>
                </Card.Body>
                <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>
            </CardGroup>
          ))}
  
        </Row>
  
     </Container>
    )
      
  }