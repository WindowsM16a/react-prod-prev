function App() {
  return (
    <>
      <div className="container border-sky-300">
        <div className="product_card w-37 flex-row  bg-white rounded-3xl">
          <div className="product_img w-50% h-100%">
            <img
              className="product_img w-100% h-100%"
              src="src/assets/image-product-mobile.jpg"
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
            <div className="prices flex flex-row items-center justify-center gap-3">
              <p className="text-3xl">$149.99</p>
              <s className="line-through">$169.99</s>
            </div>
            <button className="btn w-8">
              <img src="src/assets/icon-cart.svg" alt="cart svg" /> Add to Cart
            </button>
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
