import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

const OrderConfirmation = () => {
  const [paid, setPaid] = useState(false);
  const navigate = useNavigate();

  const { cartDispatch, setCheckout } = useAppContext();

  useEffect(() => {
    const timeout = setTimeout(() => setPaid(true), 2500);
    return () => {
      cartDispatch({ type: 'clearCart' });
      setCheckout({
        firstName: '',
        lastName: '',
        address: '',
        zip: '',
        city: '',
        shipping: 'DHL',
        payment: 'Credit_Card',
      });
      return clearTimeout(timeout);
    };
  }, []);

  return (
    <main>
      {!paid ? (
        <>
          <h1 className='mt-16 mb-8 text-center font-semibold text-3xl'>
            Processing payment
          </h1>
          <span className='loading loading-spinner w-32 block mx-auto mt-20 mb-72'></span>
        </>
      ) : (
        <>
          <h1 className='mt-16 mb-8 text-center font-semibold text-3xl'>
            Order placed!
          </h1>
          <div className='text-center mb-72'>
            <p className='my-20'>
              Order <span>#{Math.ceil(Math.random() * 100000)}</span> confirmed!
              An e-mail has been sent with all the details of your order!
            </p>
            <button onClick={() => navigate('/')} className='btn btn-primary'>
              Browse more
            </button>
          </div>
        </>
      )}
    </main>
  );
};

export default OrderConfirmation;
