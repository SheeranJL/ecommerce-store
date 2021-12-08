import React, {useState, useEffect, useContext} from 'react';
import {appContext} from '../../Context/context.js'
import {Route} from 'react-router-dom';
import ShopData from './shop-data.js';
import './shop-page.scss';

import {firestore, convertCollectionsSnapshotToMap} from '../../Firebase/firebase-utilities.js';
import CollectionsOverview from '../Collections-overview/collections-overview.js'
import Category from './Category/category.js';

const ShopPage = ({match}) => {

  const {actions: {setShopData}, data: {shopData} } = useContext(appContext);

  const unsubscribeFromSnapshot = null;

  useEffect(() => {
    const collectionRef = firestore.collection('collections');
    collectionRef.onSnapshot( async(snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      setShopData(collectionsMap);
    })
  }, [])



  return (
    <div className='shop-page'>
      <Route exact path={`${match.path}`} render={ () => <CollectionsOverview data={shopData}/>} />
      <Route path={`${match.path}/:categoryId`} component={Category} />

    </div>
  )
}

export default ShopPage;
