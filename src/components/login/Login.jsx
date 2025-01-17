import { emailLogin, signInWithGoogle } from "../../firebase/providers/providers";
import { Button, Container, Form } from "react-bootstrap";
import { useState, useContext } from "react";
import { Link} from "react-router-dom";
import { LoginContext } from "./LoginContext";
import { FcGoogle } from "react-icons/fc";
import { Home } from "../main/home/Home";



export const Login = () =>{


    const {firebaseLogin, waiting, wait, error,isLogged} = useContext(LoginContext);
    const [form, setForm] =useState({mail: "", pass:""});


    function checkForm(e){
         
        e.preventDefault();
        wait();
        const user = emailLogin(form.mail, form.pass, error);
        firebaseLogin(user)
       

    }

    async function googleSignIn(e){
        e.preventDefault();
        wait();
        const user = await signInWithGoogle(error);
        firebaseLogin(user);
    }



    function handleInput(e){
        
        const {name, value} = e.target;    // e. target devuelve el elemento que desencadenó el evento
        setForm({...form, [name]:value});
    }


    return isLogged ? <Home/> :

        <div style={{marginTop:"8em"}}>
            <Container>
                <Form >
                    <h2 style={{color: "white" }}>Login</h2>

                    <p style={{color:"white"}}>No tenés una cuenta <Link to = "/signUp" >Registrate</Link></p> 
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control  name="mail" type="email" placeholder="Email" onChange={handleInput} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control name="pass" type="password" placeholder="Contraseña" onChange={handleInput} />
                    </Form.Group>
                    
                    <div>
                        <Button variant="light" onClick={checkForm} disabled={waiting}>
                            Login
                        </Button>
                        <hr style={{borderTop: "3px solid white" }}></hr>
                        
                        <Button  className="my-3 mx-" variant="light" onClick={googleSignIn} disabled={waiting}>
                          <FcGoogle/> Ingresar con Google
                        </Button>
                    </div>
                </Form>
            </Container>
        </div>
    
}


