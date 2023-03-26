import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { AiFillRocket } from 'react-icons/ai';
import './style.css'

function Navbar() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand className="d-flex" href="#home">
                        <AiFillRocket/>
                    </Navbar.Brand>
                    <Nav>
                        <Nav.Link href="#home">Accueil</Nav.Link>
                        <Nav.Link href="#features">M'inscrire</Nav.Link>
                        <Nav.Link href="#pricing">Me connecter</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default Navbar;