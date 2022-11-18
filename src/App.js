import React from "react";
import Basket from "./Components/Basket/Basket";
import Footer from "./Components/Footer/Footer";
import LiveSearch from "./Components/LiveSearch/LiveSearch";
import Navbar from "./Components/Navbar/Navbar";
import AuthContextProvider from "./context/AuthContextProvider";
import BasketContextProvider from "./context/BasketContextProvider";
import ProductContextProvider from "./context/ProductContextProvider";
import Mainroutes from "./Mainroutes";

const App = () => {
  return (
  <BasketContextProvider>
    <AuthContextProvider>
        <ProductContextProvider>
          <Navbar />
          <Mainroutes />
          <Footer />
        </ProductContextProvider>
    </AuthContextProvider>
  </BasketContextProvider>
  );
};

export default App;