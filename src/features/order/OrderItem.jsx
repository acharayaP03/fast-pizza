import PropTypes from 'prop-types';
import { formatCurrency } from '../../utils/helpers';

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="py-3">
      <div className="flex items-center justify-between text-sm">
        <p>
          <span className="font-bold">{quantity}&times;</span> {name}
        </p>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

// OrderItem.proptypes = {
//   item: PropTypes.shape({
//     quantity: PropTypes.number.isRequired,
//     name: PropTypes.string.isRequired,
//     totalPrice: PropTypes.number.isRequired,
//   }).isRequired,
//   isLoadingIngredients: PropTypes.bool.isRequired,
//   ingredients: PropTypes.arrayOf(PropTypes.string),
// };

export default OrderItem;
