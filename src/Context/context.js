import React, {useState, useEffect, useRef} from 'react';
import ShopData from './ShopData.js';

export const appContext = React.createContext();

export const Provider = (props) => {

  const [sections, setSections] = useState(
    [{
        title: 'hats',
        imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
        id: 1,
        linkUrl: 'shop/hats'
      },{
        title: 'jackets',
        imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
        id: 2,
        linkUrl: 'shop/jackets'
      },{
        title: 'sneakers',
        imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
        id: 3,
        linkUrl: 'shop/sneakers'
      },{
        title: 'womens',
        imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
        size: 'large',
        id: 4,
        linkUrl: 'shop/womens'
      },{
        title: 'mens',
        imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
        size: 'large',
        id: 5,
        linkUrl: 'shop/mens'
      }])

  const [shopData, setShopData] = useState([])

  const [currentUser, setCurrentUser] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [orderItems, setOrderItems] = useState([]);

  const isFirstRender = useRef(true);

  useEffect(() => {

    if (isFirstRender.current) {

      const dataFromLocalStorage = localStorage.getItem('stateData');
      if (dataFromLocalStorage) {
        const appData = JSON.parse(dataFromLocalStorage);
        setCartItems(appData)
      }

      isFirstRender.current = false;
    }

    const saveToStorage = () => {
      if (localStorage) {
        localStorage.setItem('stateData', JSON.stringify(cartItems))
      }
    }
    saveToStorage()

  }, [cartItems])



  const addItemToCart = (item) => {

    let existingItems = cartItems.find((cartItem) => cartItem.id === item.id)
    let filteredList = cartItems.filter((item) => item !== existingItems)

    if (existingItems) {
      setCartItems([
        ...filteredList,
        {...existingItems, quantity: existingItems.quantity + 1}
      ])
    } else {
      setCartItems([
        ...cartItems,
        {...item, quantity: 1}
      ])
    }
  }

  const decreaseQuantity = (cartItems, itemToDecrease) => {
    const existingItem = cartItems.find((item) => item.id === itemToDecrease.id)

    if (existingItem.quantity === 1) {
      return cartItems.filter((item) => item.id !== itemToDecrease.id)
    }

    return cartItems.map((cartItem) =>
      cartItem.id === itemToDecrease.id
      ? {...cartItem, quantity: cartItem.quantity - 1}
      : cartItem
    )
  }

  const increaseQuantity = (cartItems, itemToIncrease) => {
    const existingItem = cartItems.find((item) => item.id === itemToIncrease.id)

    return cartItems.map((cartItem) =>
      cartItem.id === itemToIncrease.id
      ? {...cartItem, quantity: cartItem.quantity + 1}
      : cartItem
    )
  }

  const removeItemFromCart = (cartItems, itemToRemove) => {
    const item = cartItems.find((item) => item.id === itemToRemove.id);
    return cartItems.filter((cartItem) => cartItem.id !== item.id);
  }



  return (
    <appContext.Provider value={{
      data: {
        sections,
        currentUser,
        cartItems,
        shopData,
        orderItems
      },
      actions: {
        setCurrentUser,
        addItemToCart,
        decreaseQuantity,
        increaseQuantity,
        setCartItems,
        removeItemFromCart,
        setOrderItems,
        setShopData
      }

    }}>
    {props.children}
    </appContext.Provider>
  )
}
