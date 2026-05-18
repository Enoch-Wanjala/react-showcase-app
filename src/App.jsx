import { useEffect, useState } from 'react'
import Home from './component/Home';
import Shop from './component/sub-component/Shop';
import Admin from './component/sub-component/Admin';
import Navbar from './component/navbar';
import './App.css'
import { Routes, Route } from 'react-router-dom';

const PRODUCT_DATA_URL = import.meta.env.DEV
  ? 'http://localhost:8000/productData'
  : `${import.meta.env.BASE_URL}db.json`;

// this is our app component
function App() {
  
  // useState provides us with a varible to store and manipluate the data
  const [productData, setProductData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  //useEffect hold the sideEffect
  // we are fetching the data from the server 
  useEffect(() => {
    fetch(PRODUCT_DATA_URL)
      .then((response) => response.json())
      .then((data) => {
        setProductData(Array.isArray(data) ? data : data.productData);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching product data:', error);
        setIsLoading(false);
      });
  }, []);

  // we store the data we receive from the serve as storeInfo and coffeeproducts
  const storeInfo = productData[0]?.store_info[0];
  const coffeeProducts = productData[0]?.coffee || [];

  // function the new coffee data from the form to the state and database
  async function handleAddCoffee(newCoffee) {
    const store = productData[0];

    if (!store) {
      throw new Error('The store data is still loading. Please try again.');
    }

    const nextCoffee = {
      ...newCoffee,
      id: Date.now(),
      price: Number(newCoffee.price)
    };

    const updatedStore = {
      ...store,
      coffee: [...store.coffee, nextCoffee]
    };

    setProductData([updatedStore]);

    if (!import.meta.env.DEV) {
      return;
    }

    // we use patch to send the data store in our state to our json server 
    const response = await fetch(`http://localhost:8000/productData/${store.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        coffee: updatedStore.coffee
      })
    });

    if (!response.ok) {
      throw new Error('The coffee was not saved to db.json.');
    }

    const savedStore = await response.json();
    setProductData([savedStore]);
  }

  // search for product filtered using similar terms 
  const filteredProducts = coffeeProducts.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.origin.toLowerCase().includes(searchTerm.toLowerCase())
  );

    
  return (
    <>

    {/* we are passing data as props and using route to navigate between pages  */}
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              name={storeInfo?.name || 'Loading...'}
              description={storeInfo?.description || 'Fetching store details from db.json'}
            />
          }
        />
        <Route
          path="/shop"
          element={
            <Shop
              products={filteredProducts}
              isLoading={isLoading}
              onSearch={setSearchTerm}
            />
          }
        />
        <Route path="/admin" element={<Admin onAddCoffee={handleAddCoffee} />} />
      </Routes>
    </>
  )
}

export default App
