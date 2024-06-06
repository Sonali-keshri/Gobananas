// src/pages/ProductDetailsPage.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Card, CardActions, CardMedia, CardHeader, CardContent, Button, Stack, TextField } from '@mui/material';
import axios from 'axios';


const Details = () => {
  const { id } = useParams();
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const [count, setCount] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setData(response.data);
        setLoading(false);
      } catch (err) {
        console.log(err)
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleInc =()=>{
    setCount(count + 1);
  }
  const handleDec =()=>{
    if(count === 0) return
    setCount(count - 1);
  }

  if (loading) return <div>Loading....</div>
  if (error) return <div>Something went wrong!!</div>
  return (
    <Box style={{ marginTop: "20px", padding: "20px" }} xs={{padding:0}} >
      <Typography variant="h4">Product Details</Typography>
      <Typography variant="body1">Product ID: {id}</Typography>
      <Box className="detail_content">
        <Card className='card'>
          <CardMedia
            style={{ width: "200px", height: "300px", border: "2px solid lightgrey" }}
            image={data.image}
            title={data.title}
            className='img'
          />
          <CardContent className='card_content'>
            <Typography variant='h4'>{data.title}</Typography>
            <Typography variant='subtitle1'> {data?.rating?.rate} Ratings</Typography>
            <Typography variant='subtitle1' gutterBottom> {data?.rating?.count} Count</Typography>

            <Typography variant='body2'>{data.description}</Typography>
          </CardContent>

          <CardActions className='price_section'>
            <Typography variant='h6'><sup style={{ fontSize: "12px" }}>₹</sup>{data.price.toFixed(2)}</Typography>
            <Typography variant='h6' gutterBottom >M.R.P.: <sup style={{ fontSize: "12px" }}>₹</sup><span className='actual_price'>{data.price.toFixed(2) + 50}</span></Typography>

            <Box className="counter">
              <Button variant='contained' color='secondary'  className='qty_btn' onClick={handleDec}> - </Button>
              <input value={count} className='qty_inp' />
              <Button variant='contained'  color='secondary' className='qty_btn' onClick={handleInc}> + </Button>
            </Box>
            <Stack spacing={2} direction="row" style={{ marginTop: "60px" }} >
              <Button variant='contained' color='secondary'>Add to cart</Button>
              <Button variant='contained' color='warning'>Buy Now</Button>
            </Stack>
          </CardActions>
        </Card>
      </Box>
    </Box>
  );
};

export default Details;
