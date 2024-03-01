import './App.css';

// create a landing page for the ecommerce site create a header, footer, and a main section

// create a header component
function Header() {
  return (
    <header>
      <h1>My Ecommerce Site</h1>
      <nav>
        <ul>
          <li>Home</li>
          <li>Products</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  )
}
// create a main section component
function Main() {
  return (
    <main>
      <h2>Welcome to my site</h2>
      <p>Checkout our latest products</p>
    </main>
  )
}
// create a footer component
function Footer() {
  return (
    <footer>
      <p>&copy; 2021 My Ecommerce Site</p>
    </footer>
  )
}


function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
