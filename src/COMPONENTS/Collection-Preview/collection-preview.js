import React from 'react';
import {Link} from 'react-router-dom';
import CollectionItem from '../Collection-Item/collection-item.js';
import './collection-preview.scss';

const CollectionPreview = (props) => {


  return (
    <div className='collection-preview'>
      <Link className='title' to={`/shop/${props.data.title.toLowerCase()}`}>{props.data.title.toUpperCase()}</Link>
        <div className='preview'>
        {
          props.data.items.filter((item, index) => index < 4).map((item, index) => <CollectionItem key={index} id={item.id} item={item} name={item.name} imageUrl={item.imageUrl} price={item.price}/>)
        }
        </div>
    </div>
  )
}

export default CollectionPreview;
