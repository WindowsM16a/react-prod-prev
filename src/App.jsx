import "./index.css";

function App() {
  return (
    <>
      <div className="container flex flex-col w-4 border-sky-300">
        <div className="product_card">
          <div className="product_img">
            <img
              className="product_img"
              src="src/assets/image-produt-mobile.jpg"
              alt="perfume-pic"
            />
          </div>
          <div className="product_info">
            <h3>P E R F U M E</h3>
            <h1>Gabrielle Essence Eau De Parfum</h1>
            <p>
              A floral, solar and voluptuous interpretation composed by Olivier
              Polge, Perfumer-Creator for the House of CHANEL.
            </p>
            <div className="prices flex flex-col ">
              <p>$149.99</p>
              <s>$169.99</s>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
        <p>This was built by shayne</p>
      </footer>
    </>
  );
}

export default App;
