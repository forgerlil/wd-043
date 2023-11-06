import {
  useState,
  useEffect,
  createContext,
  useContext,
  useReducer,
} from 'react';
import { getProducts } from '../utils/getProducts';

const AppContextObj = createContext();

export const useAppContext = () => useContext(AppContextObj);

function cartReducer(state, action) {
  switch (action.type) {
    case 'addToCart':
      const copyCart = [...state];
      const findinCart = copyCart.findIndex(
        (product) => product.id === action.payload.id
      );
      if (findinCart === -1)
        copyCart.push({
          ...action.payload.product,
          qty: action.payload.amount,
          onSale: action.payload.onSale,
        });
      else
        copyCart[findinCart] = {
          ...action.payload.product,
          qty: state[findinCart].qty + action.payload.amount,
          onSale: action.payload.onSale,
        };
      return copyCart;
    case 'removeFromCart':
      return state.filter((product) => product.id !== action.payload);
    case 'clearCart':
      return [];
    default:
      throw new Error('Invalid action');
  }
}

const AppContext = ({ children }) => {
  const [products, setProducts] = useState(null);
  const [cart, cartDispatch] = useReducer(cartReducer, []);
  const [checkout, setCheckout] = useState({
    firstName: '',
    lastName: '',
    address: '',
    zip: '',
    city: '',
    shipping: 'DHL',
    payment: 'Credit_Card',
  });

  useEffect(() => {
    getProducts().then((fetchedProducts) => setProducts(fetchedProducts));
  }, []);

  return (
    <AppContextObj.Provider
      value={{
        products,
        setProducts,
        cart,
        cartDispatch,
        checkout,
        setCheckout,
      }}
    >
      {children}
    </AppContextObj.Provider>
  );
};

export default AppContext;
