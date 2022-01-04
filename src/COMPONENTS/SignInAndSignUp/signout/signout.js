import React, {useContext, useEffect} from 'react';
import {appContext} from '../../../Context/context.js'

const SignOut = () => {

  const {actions: {setCurrentUser}} = useContext(appContext);

  useEffect(() => {
    setCurrentUser(null)
  }, [])

  return (
    null
  )
}

export default SignOut;
