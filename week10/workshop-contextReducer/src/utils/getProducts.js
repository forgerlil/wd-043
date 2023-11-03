export const getProducts = async () => {
  try {
    const fetchProducts = await fetch('https://fakestoreapi.com/products');
    if (!fetchProducts.ok)
      throw new Error(
        `Getting products failed with a status of ${fetchProducts.status}`
      );
    return await fetchProducts.json();
  } catch (error) {
    console.error(error);
  }
};
