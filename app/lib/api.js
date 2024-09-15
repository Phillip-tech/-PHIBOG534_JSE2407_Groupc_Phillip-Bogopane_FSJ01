const API_URL ='https://next-ecommerce-api.vercel.app/products?limit=100';
 

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

 