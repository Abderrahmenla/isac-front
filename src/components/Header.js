
import Container from 'react-bootstrap/Container';
import './Header.css';
import Navbar from 'react-bootstrap/Navbar';
function Header (){
    return (
<Navbar  className="color-nav">
        <Container className="header-right" >
            <img src="logoIcsa.png" alt="LOGO ICSA2023" className="logo"></img>
            <Navbar.Text href="#home" className='head'> 
            <h5>International Conference on Spectroscopy and Applications 2023</h5> 
</Navbar.Text>
        </Container>
      </Navbar>
    );
}
export default Header;