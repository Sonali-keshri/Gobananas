import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Card, CardContent, CardMedia,CardActions, Typography, Button, Stack } from '@mui/material'

const ProductCard = ({item}) => {
    return (
        <>
     
            <Card sx={{ maxWidth: 300, border: "2px solid lightgray" , padding: "10px"  }} className='card'>
                <CardMedia
                    sx={{ height: 200,  }}
                    image={item.image}
                    title={item.title}
                   className='img'
                />
                <CardContent>
                    <Typography variant='h6' component='div' gutterBottom>{item.category.toUpperCase()}</Typography>
                    <Typography variant='body2' >{item.title}</Typography>
                </CardContent>
                <CardActions style={{marginInline: "10px"}}>
                    <Link to={`product/${item.id}`}><Button variant='contained' color='warning'>Buy Now</Button></Link>
                    <Stack direction='row'>
                        <Button size='small'>Share</Button>
                        <Button size='small'>Learn more</Button>
                    </Stack>
                </CardActions>
            </Card>

       
        </>
    )
}

export default ProductCard