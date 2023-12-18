import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';

function Header() {
    return (
        <nav className="navbar navbar-expand-lg fixed-top py-3">
            {/* <a className="navbar-brand" href="#">Navbar</a> */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav m-auto">
                    <Nav.Link as={NavLink} to="/" className='mx-3 fs-6 fw-normal'>HOME</Nav.Link>
                    <Nav.Link as={NavLink} to="/about" className='mx-3 fs-6 fw-normal'>ABOUT</Nav.Link>
                    <Nav.Link as={NavLink} to="/skills" className='mx-3 fs-6 fw-normal'>SKILLS</Nav.Link>
                    <Nav.Link as={NavLink} to="/projects" className='mx-3 fs-6 fw-normal'>PROJECTS</Nav.Link>
                    <Nav.Link as={NavLink} to="/timeline" className='mx-3 fs-6 fw-normal'>TIMELINE</Nav.Link>
                    <Nav.Link as={NavLink} to="/contact" className='mx-3 fs-6 fw-normal'>CONTACT</Nav.Link>
                </ul>
            </div>
        </nav>
    );
}

export { Header };