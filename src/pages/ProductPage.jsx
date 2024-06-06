
import { useEffect, useState } from 'react';
import '../App.css';
import ProductCard from '../components/ProductCard';
import { Box, Typography, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import axios from 'axios';

function ProductPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState('all');
  const [categories, setCategories] = useState([]);

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

    // Fetch unique categories
    const fetchCategories = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products/categories');
        setCategories(['all', ...response.data]);
      } catch (err) {
        console.error('Error fetching categories:', err);
      }
    };

    fetchCategories();
  }, []);

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const filteredData = category === 'all' ? data : data.filter(item => item.category === category);

  return (
    <>
      <Box className="filter-container" sx={{ padding: 2 }}>
        <FormControl variant="outlined" sx={{ minWidth: 200 }}>
          <InputLabel>Category</InputLabel>
          <Select value={category} onChange={handleCategoryChange} label="Category">
            {categories.map((cat) => (
              <MenuItem key={cat} value={cat}>
                {cat}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      <Box className='wrapper'>
        <Box className="cards">
          {filteredData?.map((item) => (
            <ProductCard item={item} key={item.id} />
          ))}
        </Box>
      </Box>
    </>
  );
}

export default ProductPage;
