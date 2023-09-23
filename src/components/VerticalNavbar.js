import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

function VerticalNavbar() {
    return (
        <Navbar>
        <Nav className='flex-column'>
          <NavItem>
            1
          </NavItem>
          <NavItem>
            2
          </NavItem>
          <NavItem>
            3
          </NavItem>
        </Nav>
      </Navbar>
    )
}

export default VerticalNavbar;