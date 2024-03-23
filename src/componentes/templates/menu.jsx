import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useContext } from 'react';
import { ContextoUsuario } from '../contexto/Contexto';

export default function Menu(props) {
    const [usuario, setUsuario] = useContext(ContextoUsuario);
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/">Menu</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Cadastros" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/clientes">Clientes</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.3">Treino</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/produtos">Tipo de Treino</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#" onClick={() => {
                            setUsuario({ ...usuario, logado: false})
                        }
                        }>Logout</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}