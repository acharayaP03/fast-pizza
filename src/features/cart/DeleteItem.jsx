import React from 'react';
import Button from '../../ui/Buttton';
import { useDispatch } from 'react-redux';
import { removeFromCart } from './cartSlice';

export default function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();

  return (
    <Button type="small" onClick={() => dispatch(removeFromCart(pizzaId))}>
      Remove
    </Button>
  );
}
