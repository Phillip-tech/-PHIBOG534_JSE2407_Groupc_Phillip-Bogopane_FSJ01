const API_URL = 'https://next-ecommerce-api.vercel.app';
// https://next-ecommerce-api.vercel.app/products?skip=40

export async function getProducts(page = 1, limit = 20, skip = 0) {
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
    console.log(`Fetching product with id ${id} from ${API_URL}/products/${id}`);
    const res = await fetch(`${API_URL}/products/${id}`, { cache: 'no-store' });
    if (!res.ok) {
      throw new Error(`Failed to fetch product. Status: ${res.status}`);
    }
    const product = await res.json();
    console.log(`Fetched product:`, product);
    return product;
  }
  