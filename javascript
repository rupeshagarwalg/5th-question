// Simulating fetching product data from a mock API (JSONPlaceholder)
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(data => {
    const productTitle = document.querySelector('.product-info h2');
    const productDescription = document.querySelector('.product-info p');

    // Update product information dynamically from fetched data
    productTitle.textContent = data.title;
    productDescription.textContent = data.body;
  })
  .catch(error => {
    console.error('Error fetching product data:', error);
  });
