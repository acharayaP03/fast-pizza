import { formatCurrency } from '../../utils/helpers';
import Button from '../../ui/Buttton';
import { useDispatch } from 'react-redux';
import { addToCart } from '../cart/cartSlice';

function MenuItem({ pizza }) {
  const dispatch = useDispatch();
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  const soldOutClass = soldOut ? 'opacity-70 grayscale h-24' : 'h-24';

  function handleOnClick(e) {
    e.preventDefault();

    console.log('pizza', pizza);
    const newPizza = {
      pizzaId: id,
      name,
      unitPrice,
      quantity: 1,
      totalPrice: unitPrice * 1,
    };

    dispatch(addToCart(newPizza));
  }
  return (
    <li className="flex gap-4 py-2">
      <img src={imageUrl} alt={name} className={soldOutClass} />
      <div className="flex grow flex-col pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(', ')}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}
          {!soldOut && (
            <Button type="small" onClick={handleOnClick}>
              {' '}
              add to cart
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
