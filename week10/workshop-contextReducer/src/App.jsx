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

const App = () => {
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
};

export default App;

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
      element={<Home products={products} cart={cart} cartDispatch={cartDispatch} />}
    />
    <Route path='cart' element={<Cart cart={cart} cartDispatch={cartDispatch} />} />
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
            cartDispatch={cartDispatch}
              setCheckout={setCheckout}
          />
        }
      />
    </Route>
    <Route path='*' element={<NotFound />} />
  </Route>
</Routes>
*/
