import React, {useState, useEffect, useContext} from 'react';
import {appContext} from '../../Context/context.js'
import {Route} from 'react-router-dom';
import ShopData from './shop-data.js';
import './shop-page.scss';

import {firestore, convertCollectionsSnapshotToMap} from '../../Firebase/firebase-utilities.js';
import CollectionsOverview from '../Collections-overview/collections-overview.js'
import Category from './Category/category.js';
import WithSpinner from '../Spinner/spinner.js';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CategoryPageWithSpinner = WithSpinner(Category);

const ShopPage = ({match}) => {

  const {actions: {setShopData, updateCollections}, data: {shopData, loading} } = useContext(appContext);

  const unsubscribeFromSnapshot = null;

  useEffect(() => {
    const collectionRef = firestore.collection('collections');

    collectionRef.get().then((snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
    })

  },[])


  return (
    <div className='shop-page'>
      <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={loading} {...props}/>} />
      <Route path={`${match.path}/:categoryId`} render={(props) => <CategoryPageWithSpinner isLoading={loading} {...props}/> } />

    </div>
  )
}

export default ShopPage;
