import React, {useContext, useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {appContext} from '../../Context/context.js';
import './collections-overview.scss'
import CollectionPreview from '../Collection-Preview/collection-preview.js';



const CollectionsOverview = (props) => {

  const {data: {shopData}} = useContext(appContext);
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState(null)

  useEffect(() => {

    if (shopData) {
      setItems(Object.keys(shopData).map(key => shopData[key]))
      setLoading(false)
    } else {
      setItems([])
      setLoading(true)
    }
  }, [shopData])

  return (
    <div className='collections-overview'>

      {
        loading
        ? null
        : items.map((item, index) => <CollectionPreview data={item}/>)
      }

    </div>
  )

}

export default CollectionsOverview;
