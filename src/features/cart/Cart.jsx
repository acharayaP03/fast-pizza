import CartItem from './CartItem';
import LinkButton from '../../ui/LinkButton';
import Button from '../../ui/Buttton';
import { useSelector } from 'react-redux';

function Cart() {
  const username = useSelector((state) => state.user.username);
  const cart = useSelector((state) => state.cart.cart);

  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold">Your cart, {username} </h2>

      <ul className="devide-stone-200 mt-3 divide-y border-b">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div className="mt-6 space-x-2">
        <Button to="/order/new" type="primary">
          Order pizzas
        </Button>

        <Button type="secondary">Clear cart</Button>
      </div>
    </div>
  );
}

export default Cart;
