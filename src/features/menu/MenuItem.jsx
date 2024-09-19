import { formatCurrency } from '../../utils/helpers';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToCart,
  getCurrentQuantityById,
  getPizzaInCart,
} from '../cart/cartSlice';

import Button from '../../ui/Buttton';
import DeleteItem from '../cart/DeleteItem';
import UpdateItemQuantity from '../cart/UpdateItemQuantity';

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const pizzaExistInCart = useSelector(getPizzaInCart(id));
  const currentQuantity = useSelector(getCurrentQuantityById(id));

  const dispatch = useDispatch();

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

          {pizzaExistInCart && (
            <div className="flex items-center gap-3 sm:gap-6">
              <UpdateItemQuantity
                pizzaId={id}
                currentQuantity={currentQuantity}
              />
              <DeleteItem pizzaId={id} />
            </div>
          )}

          {!soldOut && !pizzaExistInCart && (
            <Button type="small" onClick={handleOnClick}>
              add to cart
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
