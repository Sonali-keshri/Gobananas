import { useEffect, useState } from 'react'
import '../App.css'
import ProductCard from '../components/ProductCard'
import { Box, Typography } from '@mui/material'
import axios from 'axios'
import Navbar from '../components/Navbar'

function ProductPage() {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setData(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;



  return (
    <>

      <Box className='wrapper' >
        <Box className="cards">
          {
            data?.map((item) => {
              return (
                <ProductCard item={item} key={item.id} />
              )
            })
          }
        </Box>
      </Box>
    </>
  )
}

export default ProductPage
