import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import { useState } from 'react';
import {useCount} from '../../customHooks/useCount'



export default function ItemCount() {

    const {count, decrement, increment, reset} = useCount(10,20,1)
    
    return (
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
            sx={{ height: 180 }}
            image="/src/assets/headphones.jpg"
            title="headphones"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Headphones
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
            </Typography>
        </CardContent>
        <CardActions>
            <Button onClick={increment} sx={{fontSize:"30px"}}>+</Button>
            <div>{count}</div>
            <Button onClick={decrement} sx={{fontSize:"30px"}}>-</Button>
            <Button onClick={reset} sx={{fontSize:"15px"}}>Reset</Button>
        </CardActions>
        </Card>
    );
}

