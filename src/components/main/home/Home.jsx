import { Collectibles } from "../pages/Collectibles"
import { Container } from "react-bootstrap"
import { Intro } from "./Intro"

export const Home = () =>{
    return(
      <Container>
        <Intro />
        <Collectibles /> 
      </Container>  
    )
}