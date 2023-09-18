import NavBar from './NavBar';

const Header = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('You searched for something!');
  };

  return (
    <header className='bg-info-content'>
      <div className='navbar justify-between max-w-[1280px] mx-auto'>
        <div>
          <img
            src='https://img.freepik.com/premium-vector/cute-cartoon-rubber-duck-vector-illustration_773815-129.jpg?w=740'
            alt='rubber duck'
            className='mask mask-squircle w-16 ml-4 my-2'
          />
        </div>
        <form className='form-control' onSubmit={handleSubmit}>
          <label className='input-group'>
            <span>🔍</span>
            <input
              type='text'
              placeholder='Duck name'
              className='input'
              onChange={(e) => console.log(e.target.value)}
            />
          </label>
        </form>
        <NavBar />
      </div>
    </header>
  );
};

export default Header;
