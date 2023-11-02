import { useState } from 'react';
import { FaCartPlus } from 'react-icons/fa';

const Product = ({
  product,
  product: { id, title, image, price },
  cart,
  setCart,
}) => {
  const [amount, setAmount] = useState(1);
  const [onSale] = useState(price > 100 ? true : false);

  const putInCart = (id, product) => {
    const copyCart = [...cart];
    const findinCart = copyCart.findIndex((product) => product.id === id);
    if (findinCart === -1)
      copyCart.push({ ...product, qty: amount, onSale: onSale });
    else
      copyCart[findinCart] = {
        ...product,
        qty: cart[findinCart].qty + amount,
        onSale: onSale,
      };
    return setCart(copyCart);
  };

  return (
    // <div className="card-body">
    //   <h2 >Life hack</h2>
    //   <p>How to park your car at your garage?</p>
    //   <div className="card-actions justify-end">
    //     <button className="btn btn-primary">Learn now!</button>
    //   </div>
    // </div>

    <div className='card w-96 glass overflow-hidden justify-end'>
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
            className='btn btn-secondary'
            onClick={() => putInCart(id, product)}
          >
            <FaCartPlus size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
