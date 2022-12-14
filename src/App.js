import { useState } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';
import Footer from './components/Footer/Footer';

function App() {
  // const ctx = useContext(CartContext);

  const [cartIsShown, setcartIsShown] = useState(false);

  const showCartHandler = function () {
    setcartIsShown(true);
  };

  const hideCartHandler = function () {
    setcartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
      <Footer />
    </CartProvider>
  );
}

export default App;
