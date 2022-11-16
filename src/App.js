import React from "react";
import CardPage from "./Components/CardPage/CardPage";
import Footer from "./Components/Footer/Footer";
import HomePage from "./Components/HomePage/HomePage";
import Navbar from "./Components/Navbar/Navbar";
import AuthContextProvider from "./context/AuthContextProvider";
import ProductContextProvider from "./context/ProductContextProvider";
import Mainroutes from "./Mainroutes";

const App = () => {
  return (
    <AuthContextProvider>
        <ProductContextProvider>
          <Navbar />
          <Mainroutes />
          <Footer />
        </ProductContextProvider>
    </AuthContextProvider>
  );
};

export default App;