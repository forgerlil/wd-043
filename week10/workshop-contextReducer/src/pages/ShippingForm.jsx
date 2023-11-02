import { useNavigate } from 'react-router-dom';
import {
  FaDhl,
  FaUps,
  FaFedex,
  FaCcPaypal,
  FaCcApplePay,
  FaCreditCard,
} from 'react-icons/fa';

const ShippingForm = ({ shipping, payment, setCheckout }) => {
  const navigate = useNavigate();

  const selection = (e) =>
    setCheckout((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  return (
    <main>
      <h1></h1>
      <form className='w-96 mx-auto'>
        <fieldset className='my-16'>
          <legend className='mt-16 mb-8 text-center font-semibold text-xl'>
            Select your shipping option
          </legend>
          <div className='max-w-[300px] mx-auto'>
            <div className='form-control'>
              <label className='label cursor-pointer'>
                <span className='label-text flex items-center gap-4 text-lg'>
                  <FaDhl size='2.5em' /> DHL
                </span>
                <input
                  type='radio'
                  name='shipping'
                  id='DHL'
                  value='DHL'
                  className='radio'
                  onChange={selection}
                  checked={shipping === 'DHL'}
                />
              </label>
              <label className='label cursor-pointer'>
                <span className='label-text flex items-center gap-4 text-lg'>
                  <FaUps size='1.5em' /> UPS
                </span>
                <input
                  type='radio'
                  name='shipping'
                  id='UPS'
                  value='UPS'
                  className='radio'
                  onChange={selection}
                  checked={shipping === 'UPS'}
                />
              </label>
              <label className='label cursor-pointer'>
                <span className='label-text flex items-center gap-4 text-lg'>
                  <FaFedex size='2em' /> FedEx
                </span>
                <input
                  type='radio'
                  name='shipping'
                  id='FedEx'
                  value='FedEx'
                  className='radio'
                  onChange={selection}
                  checked={shipping === 'FedEx'}
                />
              </label>
            </div>
          </div>
        </fieldset>
        <fieldset>
          <legend className='mt-16 mb-8 text-center font-semibold text-xl'>
            Choose payment method
          </legend>
          <div className='max-w-[300px] mx-auto'>
            <div className='form-control'>
              <label className='label cursor-pointer'>
                <span className='label-text flex items-center gap-4 text-lg'>
                  <FaCreditCard size='1.5em' /> Credit Card
                </span>
                <input
                  type='radio'
                  name='payment'
                  id='Credit_Card'
                  value='Credit_Card'
                  className='radio'
                  onChange={selection}
                  checked={payment === 'Credit_Card'}
                />
              </label>
              <label className='label cursor-pointer'>
                <span className='label-text flex items-center gap-4 text-lg'>
                  <FaCcApplePay size='1.5em' /> Apple Pay
                </span>
                <input
                  type='radio'
                  name='payment'
                  id='Apple_Pay'
                  value='Apple_Pay'
                  className='radio'
                  onChange={selection}
                  checked={payment === 'Apple_Pay'}
                />
              </label>
              <label className='label cursor-pointer'>
                <span className='label-text flex items-center gap-4 text-lg'>
                  <FaCcPaypal size='1.5em' /> PayPal
                </span>
                <input
                  type='radio'
                  name='payment'
                  id='PayPal'
                  value='PayPal'
                  className='radio'
                  onChange={selection}
                  checked={payment === 'PayPal'}
                />
              </label>
            </div>
          </div>
        </fieldset>
        <div className='flex justify-between mt-16'>
          <button
            onClick={() => navigate('/checkout')}
            className='btn btn-primary-focus'
          >
            Back
          </button>
          <button
            onClick={() => navigate('/checkout/overview')}
            className='btn btn-primary'
          >
            Next
          </button>
        </div>
      </form>
    </main>
  );
};

export default ShippingForm;
