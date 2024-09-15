/**
 * Function to retrieve products from the API based on pagination parameters.
 * @param {number} page - The page number to retrieve products from.
 * @param {number} limit - The maximum number of products to retrieve per page.
 * @param {number} skip - The number of products to skip before retrieving.
 * @returns {Promise<Array>} - A promise that resolves with an array of products.
 */
export async function getProducts(page = 1, limit = 100, skip = 1) {
  console.log(`Fetching products from ${API_URL}/products?_page=${page}&_limit=${limit}&_start=${skip}`);
  const res = await fetch(`${API_URL}/products?_page=${page}&_limit=${limit}&_start=${skip}`, { cache: 'no-store' });
  if (!res.ok) {
    throw new Error(`Failed to fetch products. Status: ${res.status}`);
  }
  const products = await res.json();
  console.log(`Fetched ${products.length} products`);
  return products;
}

/**
 * Function to retrieve a single product from the API based on the provided id.
 * @param {string} id - The id of the product to retrieve.
 * @returns {Promise<Object>} - A promise that resolves with the retrieved product object.
 */
export async function getProduct(id) {
  const singleProductURL = `https://next-ecommerce-api.vercel.app/products/${id}`;
  console.log(`Fetching product with id ${id} from ${singleProductURL}`);
  const res = await fetch(singleProductURL, { cache: 'no-store' });
  if (!res.ok) {
      throw new Error(`Failed to fetch product. Status: ${res.status}`);
  }
  const product = await res.json();
  console.log(`Fetched product:`, product);
  return product;
}
  

  // export async function getTotalProducts() {
  //   console.log(`Fetching total products count from ${API_URL}/products`);
  //   const res = await fetch(`${API_URL}/products`, { cache: 'no-store' });
  //   if (!res.ok) {
  //     throw new Error(`Failed to fetch total products. Status: ${res.status}`);
  //   }
  //   const products = await res.json();
  //   console.log(`Total products count: ${products.length}`);
  //   return products.length;
  // }

 