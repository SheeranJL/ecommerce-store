import React, {useContext} from 'react';
import {appContext} from '../../../Context/context.js';
import './category-item.scss';
import CustomButton from '../../Buttons/buttons.js'

const CategoryItem = ({data, item}) => {

  const {actions} = useContext(appContext);


  function handleClick()  {
    actions.addItemToCart({...data})
  }

  return (
    <div className='collection-item'>
      <div className='image' style={{backgroundImage: `url(${data.imageUrl})`}} />
        <div className='collection-footer'>
          <span className='name'>{data.name}</span>
          <span className='price'>{data.price}</span>
        </div>
        <CustomButton onClick={handleClick}>Add to cart</CustomButton>
      </div>
  )
}

export default CategoryItem;
