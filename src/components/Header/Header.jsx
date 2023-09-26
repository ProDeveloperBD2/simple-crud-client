import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar bg="danger" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home" className='fw-semibold pe-5'>SIMPLE CRUD CLIENT</Navbar.Brand>
                    <Nav className="me-auto">
                        <Link className='me-3 text-black text-decoration-none fw-semibold' to="/">Home</Link>
                        <Link className='me-3 text-black text-decoration-none fw-semibold' to="/users">Users</Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;