function App() {
  return (
    <>
      <div className="container flex flex-col lg:flex-row items-center justify-center border-sky-300  ">
        <div className="product_card w-[23.5rem] h-full lg:w-[36rem] lg:h-[28rem] flex flex-col lg:flex-row  bg-white rounded-lg">
          <div className="product_img w-full h-[100%] lg:w-[50%]">
            <img
              className="product_img rounded- lg:rounded-l-lg w-full h-[22rem] lg:h-full object-cover object-center"
              src="https://res.cloudinary.com/dx72ndl5e/image/upload/v1734333624/image-product-desktop_oxxyxk.jpg"
              alt="perfume-pic"
            />
          </div>
          <div className="product_info flex flex-col lg:flex-col items-start justify-center p-8 gap-4 w-full lg:w-[50%] ">
            <h3 className="text-sm font-medium text-slate-500">
              P E R F U M E
            </h3>
            <h1 className="text-4xl w-full leading-8 font-fraunces font-bold">
              Gabrielle Essence Eau De Parfum
            </h1>
            <p className="text-dark-grey-bluee lg:w-full font-weight  font-montserrat leading-6 text-sm">
              A floral, solar and voluptuous interpretation composed by Olivier
              Polge, Perfumer-Creator for the House of CHANEL.
            </p>
            <div className="prices flex flex-row items-center justify-center gap-3 font-fraunces text-dark-greenish">
              <p className="text-3xl font-bold">$149.99</p>
              <s className="text-sm text-slate-500 font-montserrat">$169.99</s>
            </div>
            <button className="btn w-full h-12 lg:w-full lg:h-11 flex flex-row items-center justify-center gap-2 bg-dark-greenish bor rounded-xl text-white hover:bg-darker-greenish">
              <img
                src="https://res.cloudinary.com/dx72ndl5e/image/upload/v1734333624/icon-cart_irasif.svg"
                alt="shopping-cart-icon"
              />{" "}
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <footer className="footer fixed lg:absolute w-full text-center left-0 right-0 bottom-2 p-4">
        <p className="text-slate-500">
          This was built by{" "}
          <a
            className="text-sky-900 underline-offset-2 underline"
            href="https://github.com/WindowsM16a"
          >
            Shayne Wuver
          </a>
        </p>
      </footer>
    </>
  );
}

export default App;
