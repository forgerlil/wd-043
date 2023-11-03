import { useNavigate } from 'react-router-dom';
import { CartList } from '../components';
import { useAppContext } from '../context/AppContext';

const Cart = () => {
  const navigate = useNavigate();
  const { cart } = useAppContext();

  return (
    <main className='flex flex-col items-center h-[55vh]'>
      <h1 className='mt-16 mb-8 text-center font-semibold text-2xl'>
        Your shopping cart
      </h1>
      {cart.length ? (
        cart.map((item) => <CartList key={crypto.randomUUID()} {...item} />)
      ) : (
        <p className='text-xl mt-20 mb-10 mx-8'>Your cart is currently empty</p>
      )}
      <button
        className='btn btn-primary mt-10'
        onClick={() => navigate('/checkout')}
        disabled={!cart.length}
      >
        Check out
      </button>
    </main>
  );
};

export default Cart;
