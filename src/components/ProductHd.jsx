import React from 'react'
import { TbArrowRight } from 'react-icons/tb'
import PropTypes from 'prop-types';



const ProductHd = (props) => {

const {product} = props;

return (
    <div className='max-pad-container flex items-center flex-wrap gap-x-2 medium-16 py-4 capitalize bg-primary'>
        Home <TbArrowRight /> Shop <TbArrowRight /> {product.category} <TbArrowRight /> {product.name}
    </div>
)
}

ProductHd.propTypes = {
    product: PropTypes.shape({
        name: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
    }).isRequired,
};

export default ProductHd