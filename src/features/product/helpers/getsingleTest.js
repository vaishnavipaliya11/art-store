const axios = require('axios'); // Import Axios (ensure you have Axios installed)

// Define a function to fetch a product by its ID
export async function fetchProductById(productId) {
  try {
    const response = await axios.get(`/api/products/${productId}`);
    
    if (response.status === 200) {
      return response.data; // Return the data from the response
    } else {
      throw new Error(`Request failed with status: ${response.status}`);
    }
  } catch (error) {
    console.error('Error fetching product:', error.message);
    throw error; // You can re-throw the error if you want to handle it elsewhere
  }
}

// Usage example:
const productId = 23; // Replace with the desired product ID
fetchProductById(productId)
  .then(productData => {
    console.log(productData); // This is the product data
  })
  .catch(error => {
    // Handle errors here
  });
