import { useNavigate } from 'react-router-dom';
import { CartList } from '../components';

const Overview = ({
  cart,
  firstName,
  lastName,
  address,
  zip,
  city,
  shipping,
  payment,
}) => {
  const navigate = useNavigate();

  const calculateCart = cart.reduce((acc, curr) => {
    return curr.onSale
      ? acc + curr.price * curr.qty - (curr.price * curr.qty) / 10
      : acc + curr.price * curr.qty;
  }, 0);

  return (
    <main>
      <h1 className='mt-16 mb-8 text-center font-semibold text-2xl'>
        Confirm your order
      </h1>
      {cart.map((product) => (
        <CartList key={crypto.randomUUID()} overview {...product} />
      ))}
      <section className='max-w-[600px] mx-auto my-16'>
        <h3 className='text-2xl font-semibold'>Your details</h3>
        <div className='flex justify-between'>
          <ul>
            <li className='font-light text-lg'>{firstName}</li>
            <li className='font-light text-lg'>{lastName}</li>
            <li className='font-light text-lg'>{address}</li>
            <li className='font-light text-lg'>{zip}</li>
            <li className='font-light text-lg'>{city}</li>
          </ul>
          <div>
            <p className='font-light text-lg'>
              Shipping carrier: <span className='font-normal'>{shipping}</span>
            </p>
            <p className='font-light text-lg'>
              Payment method:{' '}
              <span className='font-normal'>{payment.replace('_', ' ')}</span>
            </p>
            <p className='font-light text-lg'>
              Total:{' '}
              <span className='font-normal'>€{calculateCart.toFixed(2)}</span>
            </p>
          </div>
        </div>
      </section>
      <div className='w-[800px] mx-auto flex justify-end gap-16 mt-16'>
        <button className='btn btn-primary-focus' onClick={() => navigate(-1)}>
          Back
        </button>
        <button
          className='btn btn-primary'
          onClick={() => {
            navigate('/checkout/confirmation');
          }}
        >
          Pay Now
        </button>
      </div>
    </main>
  );
};

export default Overview;
