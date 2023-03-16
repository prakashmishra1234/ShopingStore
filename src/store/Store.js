import React, { createContext, useState } from "react";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [searchedResult, setSearchedResult] = useState([]);
  const [cart, setCart] = useState([]);
  return (
    <AuthContext.Provider
      value={{
        products,
        searchedResult,
        cart,
        setCart,
        setSearchedResult,
        setProducts,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
