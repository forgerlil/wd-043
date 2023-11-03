import { useState } from 'react';
import { FaCartPlus } from 'react-icons/fa';
import { useAppContext } from '../context/AppContext';

const Product = ({ product, product: { id, title, image, price } }) => {
  const [amount, setAmount] = useState(1);
  const [onSale] = useState(price > 100 ? true : false);

  const { cartDispatch } = useAppContext();

  return (
    <div className='card w-48 md:w-60 lg:w-96 glass overflow-hidden justify-end'>
      {onSale && (
        <p className='absolute right-4 top-4 px-4 py-2 text-white font-semibold text-xl rounded-xl bg-accent'>
          10% off!
        </p>
      )}
      <figure className='overflow-hidden'>
        <img src={image} alt='' className='h-[15rem] mt-4' />
      </figure>
      <div className='card-body justify-end'>
        <h3 className='card-title line-clamp-2 text-ellipsis'>{title}</h3>
        <div className='flex gap-2 items-center my-8 justify-center'>
          <span
            className={
              onSale ? 'line-through font-light' : 'text-2xl font-bold'
            }
          >
            €{price}
          </span>
          {onSale && (
            <span className='text-2xl font-bold text-accent'>
              €{onSale ? (price - price / 10).toFixed(2) : price}
            </span>
          )}
        </div>
        <div className='flex justify-around'>
          <div className='flex items-center'>
            <button
              onClick={() => setAmount((prev) => prev - 1)}
              disabled={amount <= 1 && true}
              className='btn btn-primary aspect-square'
            >
              -
            </button>
            <p className='text-xl mx-4 font-bold'>{amount}</p>
            <button
              className='btn btn-primary aspect-square'
              onClick={() => setAmount((prev) => prev + 1)}
            >
              +
            </button>
          </div>
          <button
            className='btn btn-secondary ml-4'
            onClick={() =>
              cartDispatch({
                type: 'addToCart',
                payload: {
                  id,
                  product,
                  amount,
                  onSale,
                },
              })
            }
          >
            <FaCartPlus size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
