import { Link, useNavigate } from 'react-router-dom';
import { FaHome, FaShoppingCart, FaUserAlt } from 'react-icons/fa';

const NavBar = ({ cart }) => {
  const navigate = useNavigate();

  const calculateCart =
    cart &&
    cart.reduce((acc, curr) => {
      return curr.onSale
        ? acc + curr.price * curr.qty - (curr.price * curr.qty) / 10
        : acc + curr.price * curr.qty;
    }, 0);

  return (
    <div className='navbar bg-base-100 max-w-[1260px] justify-between mx-auto'>
      <div className=''>
        <img
          className='rounded-full aspect-square object-cover max-w-[4rem] my-4 cursor-pointer mr-2'
          src='https://cdn.freewebstore.com/resize/227567/nodrill.gif/160/120/0/'
          alt='no drill logo'
          onClick={() => navigate('/')}
        />
        <div className='text-3xl font-semibold'>Putting in Context</div>
      </div>
      <div className='flex gap-4'>
        <Link to='/'>
          <label tabIndex={0} className='btn btn-ghost btn-circle'>
            <FaHome size={25} />
          </label>
        </Link>
        <div className='dropdown dropdown-end'>
          <label tabIndex={0} className='btn btn-ghost btn-circle'>
            <button className='indicator'>
              <FaShoppingCart size={25} />
              {cart?.length ? (
                <span className='badge badge-sm indicator-item bg-primary text-lg h-6'>
                  {cart.length}
                </span>
              ) : null}
            </button>
          </label>
          <div
            tabIndex={0}
            className='mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-300 shadow'
          >
            <div className='card-body'>
              <span className='font-bold text-xl text-center'>
                {cart?.length} Items
              </span>
              <span className='text-secondary text-lg text-center'>
                {!cart?.length
                  ? 'Cart is empty :('
                  : `Subtotal: €${calculateCart.toFixed(2)}`}
              </span>
              <div className='card-actions mt-4'>
                <button
                  onClick={() => navigate('/cart')}
                  className='btn btn-primary btn-block'
                >
                  View cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='dropdown dropdown-end'>
          <label
            tabIndex={0}
            className='btn btn-ghost btn-circle avatar rounded-full'
          >
            <FaUserAlt size={25} />
          </label>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-300 rounded-box w-52'
          >
            <li>
              <p className='lg:text-lg'>Profile</p>
            </li>
            <li>
              <p className='lg:text-lg'>Settings</p>
            </li>
            <li>
              <p className='lg:text-lg'>Logout</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
