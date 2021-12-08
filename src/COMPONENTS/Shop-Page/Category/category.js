import './category.scss';
import React, {useContext} from 'react';
import {appContext} from '../../../Context/context.js';
import ShopData from '../shop-data.js';
import CategoryItem from '../Category-item/category-item.js';

const Category = ({match}) => {

  const {data:{shopData}} = useContext(appContext);

  const category = match.params.categoryId

  console.log(shopData[category])

  return (
    <div className='category-page'>
    <h1 className='title'>{shopData[category].title}</h1>
    <div className='items'>
    {
      shopData[category]
      ? shopData[category].items.map((item) => <CategoryItem item={item} data={item}/>)
      : <h1>not found </h1>
    }

    
    </div>
    </div>
  )
}

export default Category;
