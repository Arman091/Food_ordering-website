import { useState } from "react";
import Header from "./components/layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/cart";
import ContextProvider from "./components/store/ContextProvider";

function App() {

  const [isClose, setClose] = useState(false)

  const showCartHandler = () => {
    setClose(true)
  }
  const hideCartHandler = () => {
    setClose(false)
  }
 
  return (
    <ContextProvider>
    
        {isClose && <Cart onClose={hideCartHandler } />}
        <Header onshowCart={ showCartHandler} />
        <main>
          <Meals />
        </main>
    
    </ContextProvider>
  );
}

export default App;
