import React, {useContext} from 'react';
import {appContext} from '../../Context/context.js'
import './collection-item.scss';
import CustomButton from '../Buttons/buttons.js'

const CollectionItem = ({id, item, name, imageUrl, price}) => {

  const {data, actions} = useContext(appContext);

  const handleClick = (e) => {
    actions.addItemToCart({...item})
  }

  return (
    <div className='collection-item'>
      <div className='image' style={{backgroundImage: `url(${imageUrl})`}} />
        <div className='collection-footer'>
          <span className='name'>{name}</span>
          <span className='price'>{price}</span>
        </div>
        <CustomButton onClick={handleClick}>Add to cart</CustomButton>
      </div>
  )
}

export default CollectionItem;
