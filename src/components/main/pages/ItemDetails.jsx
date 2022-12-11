import { useEffect, useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { CartBox } from "../../cart/CartBox";
//import { useFetch } from "../../../hooks/useFetch";



export const ItemDetails = () =>{

    //parámetro de la ruta
    const {id} = useParams();
    //console.log(id)
    
    //const{productsDB: item} = useFetch(id)  

    const [item, setItem] = useState([])

    useEffect(()=>{
        fetch("/productsDB.json") //sin la url no funciona
          .then(response => response.json())
          .then(datos =>{
                setItem(datos.find(product =>product.id===parseInt(id)))
            })
            
    }, [id])

    return(<>
{/*
        <div>
    {console.log(id)}
        <h1 className="title" style={{marginTop:"2em", marginBottom: "2em"}}>Detalles del producto</h1>

        <Container className="d-flex justify-content-center ">

         

         <Card className="text-center" style={{ width: '60rem', display:"flex", flexDirection:"row" }}>

                <div style={{width:"30%"}}>
                    <Card.Header>{item.name}</Card.Header>
                    <div style={{display:"flex"}}> <img className="card-img"  src={item.image} alt={item.name}/> </div>
                </div>
                
                <div className="card-body" style={{width:"70%", alignItems:"center", padding:"0" }} >
                  
                    <Card.Header>Precio: {item.price}</Card.Header>
                    
                    <div style={{height:"80%"}}>

                        <div style={{textAlign: "center"}}>
                            <Card.Text>
                            {item.description}
                            </Card.Text>
                            <Card.Text>
                            {item.details}
                            </Card.Text>
                        </div>
                        
                        <div style={{display:"flex", flexWrap:"wrap", position:"absolute", marginBottom:"1em"}}>
                            <CartBox products={item}></CartBox >
                        </div>
                    
                    </div>
                   
                </div>   
                
            </Card>
    </Container>*/}

            <h1 className="title" style={{marginTop:"2em", marginBottom: "2em"}}>Detalles del producto</h1>

            
            
                
                <div className="card" style={{display:"flex", flexDirection:"row", margin:"4em"}} >
                    <div className="imgContainer" style={{display:"flex", flexDirection:"column"}}>
                        <img className="card-img" src={item.image} alt={item.name} />
                        <p>Precio: {item.price}</p>
                    </div>
                    
                    
                    <div className="card-body" style={{display:"flex", width:"100%", justifyContent:"center"}}>
                        <div style={{display:"flex", flexDirection:"column", width:"100%", textAlign:"center"}}>
                            <div className ='card-title'>{item.name}</div>
                            <div className ='card-text'>
                            {item.description}
                            </div>
                            <div className ='card-text'>
                            {item.details}
                            </div>
                        </div>
                        
                        
                        <CartBox products={item}></CartBox >
                        
                    </div>
                </div>


            

             
        </>
    )
}


