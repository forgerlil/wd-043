const CartList = ({
  overview = false,
  id,
  title,
  image,
  price,
  qty,
  onSale,
  cart,
  setCart,
}) => {
  const removeItem = () => setCart(cart.filter((product) => product.id !== id));

  return (
    <div className='flex items-center justify-between w-2/5 mb-4 mx-auto bg-base-200 rounded-xl border-[1px] border-base-200 overflow-hidden'>
      <div className='w-1/2 flex items-center gap-4'>
        <img
          className='block w-1/4 object-contain object-center max-h-[150px] bg-white p-4'
          src={image}
          alt={title}
        />
        <p className=''>{title}</p>
      </div>
      <p className={`font-semibold ${onSale ? 'text-accent' : ''}`}>
        €{onSale ? (price * qty - (price * qty) / 10).toFixed(2) : price * qty}
      </p>
      <p className={`text-center ${overview ? 'mr-10' : ''}`}>
        Quantity: <b>{qty}</b>
      </p>
      {!overview ? (
        <button className='btn btn-primary mr-4' onClick={removeItem}>
          Remove
        </button>
      ) : (
        <p className='text-center hidden'></p>
      )}
    </div>
  );
};

export default CartList;
