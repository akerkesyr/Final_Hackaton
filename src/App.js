import React from "react";
import Comment from "./Components/Comments/Comments";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import AuthContextProvider from "./context/AuthContextProvider";
import BasketContextProvider from "./context/BasketContextProvider";
import CommentContextProvider from "./context/CommentContextProvider";
import ProductContextProvider from "./context/ProductContextProvider";
import Mainroutes from "./Mainroutes";

const App = () => {
  return (
    <CommentContextProvider>
      <BasketContextProvider>
          <AuthContextProvider>
            <ProductContextProvider>
                <Navbar />
                <Mainroutes />
                <Footer />
            </ProductContextProvider>
          </AuthContextProvider>
        </BasketContextProvider>
    </CommentContextProvider>
  );
};

export default App;