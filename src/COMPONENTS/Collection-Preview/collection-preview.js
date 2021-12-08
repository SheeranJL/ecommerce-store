import React from 'react';
import CollectionItem from '../Collection-Item/collection-item.js';
import './collection-preview.scss';

const CollectionPreview = (props) => {


  return (
    <div className='collection-preview'>
      <h1 className='title'>{props.title.toUpperCase()}</h1>
        <div className='preview'>
        {
          props.items.filter((item, index) => index < 4).map((item) => <CollectionItem id={item.id} item={item} name={item.name} imageUrl={item.imageUrl} price={item.price}/>)
        }
        </div>
    </div>
  )
}

export default CollectionPreview;
