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



export default function ItemCountButton() {

    const {count, decrement, increment, reset} = useCount(0,1,10)
    
    return (
        <Card sx={{ maxWidth: 345 }}>
        
        <CardActions>
            <Button onClick={increment} sx={{fontSize:"30px"}}>+</Button>
            <div>{count}</div>
            <Button onClick={decrement} sx={{fontSize:"30px"}}>-</Button>
            <Button onClick={reset} sx={{fontSize:"15px"}}>Reset</Button>
        </CardActions>
        </Card>
    );
}

