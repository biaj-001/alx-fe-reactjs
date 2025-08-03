import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{display:"flex", justifyContent:"'space-between", padding: '10px', backgroundColor: 'blue', color: 'red' }}>
      <Link to="/" style={{ margin: '0 10px', color: 'white' }}>Home</Link>
      <Link to="/about" style={{ margin: '0 10px', color: 'white' }}>About</Link>
      <Link to="/services" style={{ margin: '0 10px', color: 'white' }}>Services</Link>
      <Link to="/contact" style={{ margin: '0 10px', color: 'white' }}>Contact</Link>
    </nav>
  );
}

export default Navbar;
