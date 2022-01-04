import './category.scss';
import React, {useContext} from 'react';
import {appContext} from '../../../Context/context.js';
import ShopData from '../shop-data.js';
import CategoryItem from '../Category-item/category-item.js';

const Category = ({match}) => {

  const {data:{shopData}} = useContext(appContext);

  const category = match.params.categoryId

  return (
    <div className='category-page'>
    {
      shopData
      ? <h1 className='title'>{shopData[category].title}</h1>
      : null
    }

    <div className='items'>
    {
      shopData
      ? shopData[category].items.map((item, index) => <CategoryItem key={index} item={item} data={item}/>)
      : <h1>not found </h1>
    }


    </div>
    </div>
  )
}

export default Category;
