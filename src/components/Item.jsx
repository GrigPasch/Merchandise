import { Link } from 'react-router-dom';
import { RiShoppingCart2Line } from 'react-icons/ri'
import PropTypes from 'prop-types';

const Item = ({id, name, image, old_price, new_price}) => {
  return (
    <Link to={`/product/${id}`} className='bg-white p-4 rounded-xl relative' onClick={window.scrollTo(0, 0)}>
      <div className='flexCenter'>
        <img src={image} alt="" height={211} width={211} className='rounded-lg drop-shadow-xl absolute bottom-45'/>
      </div>
      <div className='flex flex-col gap-y-3 pt-24'>
        <h4 className='line-clamp-2 medium-16'>{name}</h4>
        <p>Generic product description</p>
        <div className='flexBetween'>
          <div className='flex gap-x-4 medium-16'>
            <span>${new_price}</span>
            <span className='line-through text-secondary'>${old_price}</span>
          </div>
          <RiShoppingCart2Line className='p-2 h-10 w-10 hover:text-secondary'/>
        </div>
      </div>
    </Link>
  )
}

Item.propTypes = ({
    
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    old_price: PropTypes.number.isRequired,
    new_price: PropTypes.number.isRequired,
  }).isRequired;


export default Item