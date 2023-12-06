import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <header>
      <Navbar bg='dark' expand="lg">
        <h1>City Explorer</h1>
        <p>Enter a location below to learn about the weather, restaurants, movies, and more!</p>
      </Navbar>
    </header>
  );
}

export default Header;
