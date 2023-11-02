import { useNavigate } from 'react-router-dom';

const DetailsForm = ({
  firstName,
  lastName,
  address,
  zip,
  city,
  setCheckout,
}) => {
  const navigate = useNavigate();

  const submitDetails = (e) => {
    e.preventDefault();
    navigate('shipping');
  };

  const detailsForm = (e) =>
    setCheckout((prev) => ({ ...prev, [e.target.id]: e.target.value }));

  <div className='form-control w-full max-w-xs'></div>;

  return (
    <main>
      <h1 className='mt-16 mb-8 text-center font-semibold text-2xl'>
        Please fill out your personal details
      </h1>
      <form onSubmit={submitDetails} className='w-96 mx-auto'>
        <label className='label w-fit' htmlFor='firstName'>
          <span className='label-text'>First Name</span>
        </label>
        <input
          type='text'
          id='firstName'
          value={firstName}
          onChange={detailsForm}
          placeholder='First Name'
          className='input input-bordered w-full mb-6'
          required
        />
        <label className='label w-fit' htmlFor='lastName'>
          <span className='label-text'>Last Name</span>
        </label>
        <input
          type='text'
          id='lastName'
          value={lastName}
          onChange={detailsForm}
          placeholder='Last Name'
          className='input input-bordered w-full mb-6'
          required
        />
        <label className='label w-fit' htmlFor='address'>
          <span className='label-text'>Address</span>
        </label>
        <input
          type='text'
          id='address'
          value={address}
          onChange={detailsForm}
          placeholder='Address'
          className='input input-bordered w-full mb-6'
          required
        />
        <label className='label w-fit' htmlFor='zip'>
          <span className='label-text'>Postal Code</span>
        </label>
        <input
          type='text'
          id='zip'
          value={zip}
          onChange={detailsForm}
          placeholder='Postal Code'
          className='input input-bordered w-full mb-6'
          required
        />
        <label className='label w-fit' htmlFor='city'>
          <span className='label-text'>City</span>
        </label>
        <input
          type='text'
          id='city'
          value={city}
          onChange={detailsForm}
          placeholder='City'
          className='input input-bordered w-full '
          required
        />
        <div className='flex justify-between mt-10'>
          <button
            type='button'
            onClick={() => navigate('/cart')}
            className='btn btn-primary-focus'
          >
            Back
          </button>
          <button type='submit' className='btn btn-primary'>
            Next
          </button>
        </div>
      </form>
    </main>
  );
};

export default DetailsForm;
