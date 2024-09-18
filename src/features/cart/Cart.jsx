import { Link } from 'react-router-dom';
import LinkButton from '../../ui/LinkButton';
import Button from '../../ui/Buttton';

const fakeCart = [
  {
    pizzaId: 12,
    name: 'Mediterranean',
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: 'Vegetale',
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: 'Spinach and Mushroom',
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function Cart() {
  const cart = fakeCart;

  return (
    <div>
      <LinkButton to="/menu">Back to menu</LinkButton>
      {/* <Link to="/menu" className="text-sm text-blue-500 hover:text-blue-600">
        &larr; Back to menu
      </Link> */}

      <h2>Your cart, %NAME%</h2>

      <div>
        <Button to="/order/new">Order pizzas</Button>

        <Button>Clear cart</Button>
      </div>
    </div>
  );
}

export default Cart;
