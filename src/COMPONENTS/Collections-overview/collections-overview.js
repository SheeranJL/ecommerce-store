import React, {useContext, useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {appContext} from '../../Context/context.js';
import './collections-overview.scss'
import CollectionPreview from '../Collection-Preview/collection-preview.js';



const CollectionsOverview = (props) => {

  const [items, setItems] = useState(null);


    console.log(Object.keys(props.data))

  return (
    <div className='collections-overview'>
    null
    </div>
  )
}

export default CollectionsOverview;
