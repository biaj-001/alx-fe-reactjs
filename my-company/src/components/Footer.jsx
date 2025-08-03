function Footer() {
    return (
      <footer style={{
        padding: '10px 20px',
        textAlign: 'center',
        backgroundColor: '#333',
        color: 'white',
        left: '0',
        bottom: '0',
        width: '100%',
      }}>
        <p>&copy; {new Date().getFullYear()} My Company. All rights reserved.</p>
        <p>Contact us at elechiaotieno3@gmail.com</p>
      </footer>
    );
  }

  export default Footer;
