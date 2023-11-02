import { Routes, Route } from 'react-router-dom';
import {
  Cart,
  CheckoutLayout,
  DetailsForm,
  Home,
  MainLayout,
  NotFound,
  OrderConfirmation,
  Overview,
  ShippingForm,
} from './pages';
import { useState, useEffect } from 'react';
import { getProducts } from './utils/getProducts';

export default function App() {
  const [products, setProducts] = useState(null);
  const [cart, setCart] = useState([]);
  const [checkout, setCheckout] = useState({
    firstName: '',
    lastName: '',
    address: '',
    zip: '',
    city: '',
    shipping: 'DHL',
    payment: 'Credit_Card',
  });

  useEffect(() => {
    getProducts().then((fetchedProducts) => setProducts(fetchedProducts));
  }, []);

  return (
    <>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path='cart' element={<Cart />} />
          <Route path='checkout' element={<CheckoutLayout />}>
            <Route index element={<DetailsForm />} />
            <Route path='shipping' element={<ShippingForm />} />
            <Route path='overview' element={<Overview />} />
            <Route path='confirmation' element={<OrderConfirmation />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

// Starting point/with context

/*
<Routes>
  <Route path='/' element={<MainLayout />}>
    <Route index element={<Home />} />
    <Route path='cart' element={<Cart />} />
    <Route path='checkout' element={<CheckoutLayout />}>
    <Route index element={<DetailsForm />} />
    <Route path='shipping' element={<ShippingForm />} />
    <Route path='overview' element={<Overview />} />
    <Route path='confirmation' element={<OrderConfirmation />} />
    </Route>
    <Route path='*' element={<NotFound />} />
  </Route>
</Routes>
*/

// Prop drilling

/*
<Routes>
  <Route path='/' element={<MainLayout cart={cart} />}>
    <Route
      index
      element={<Home products={products} cart={cart} setCart={setCart} />}
    />
    <Route path='cart' element={<Cart cart={cart} setCart={setCart} />} />
    <Route path='checkout' element={<CheckoutLayout cart={cart} />}>
      <Route
        index
          element={<DetailsForm {...checkout} setCheckout={setCheckout} />}
      />
      <Route
        path='shipping'
        element={<ShippingForm {...checkout} setCheckout={setCheckout} />}
      />
      <Route
        path='overview'
        element={<Overview cart={cart} {...checkout} />}
      />
      <Route
        path='confirmation'
        element={
          <OrderConfirmation
            setCart={setCart}
              setCheckout={setCheckout}
          />
        }
      />
    </Route>
    <Route path='*' element={<NotFound />} />
  </Route>
</Routes>
*/
