import logo from './logo.svg';
import {useContext, useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import {appContext} from './Context/context.js'
import {auth, createUserProfileDocument, onLoginData} from './Firebase/firebase-utilities.js';
import ShopData from './Data/shop-data';


//Components//
import HomePage from './COMPONENTS/homepage/homepage.js';
import Header from './COMPONENTS/Header/header.js';
import signInAndSignUp from './COMPONENTS/SignInAndSignUp/signinandup.js';
import SignOut from './COMPONENTS/SignInAndSignUp/signout/signout.js';
import ShopPage from './COMPONENTS/Shop-Page/shop-page.js';
import CheckOutPage from './COMPONENTS/Check-out-page/check-out-page.js';
import OrderConfirmation from './COMPONENTS/Order-confirmation/order-confirmation.js';
//  //  //  //
import './App.css';


const App = () => {

  const {data, actions} = useContext(appContext);
  const [hasOrdered, setHasOrdered] = useState(false);

  let unsubscribeFromAuth = null;


  useEffect(() => {

    unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          actions.setCurrentUser({
            id: snapShot.id,
            ...snapShot.data
          });
        });

        const getDataFromFirestore = async() => {
          const firestoreData = await onLoginData(userAuth.uid);
          const response = await firestoreData;

          if (response.data.length) {
            const itemsMap = await response.data.map(item => item);
            await actions.setCartItems([...itemsMap])
          } else {
            return
          }

        }
        getDataFromFirestore();
      }

      actions.setCurrentUser(userAuth);
    })



    if (data.orderItems.length !== 0) {
      setHasOrdered(true)
    } else {
      setHasOrdered(false)
    }

  }, [data.orderItems])


  return (
    <div className='app-container'>

      <Router basename={process.env.PUBLIC_URL}>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/signin' component={signInAndSignUp} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/checkout' component={CheckOutPage} />
          {
            hasOrdered
            ? <Route path='/thankyou' component={OrderConfirmation} />
            : <Redirect to='/'/>
          }
        </Switch>
      </Router>

    </div>
  );
}


export default App;
