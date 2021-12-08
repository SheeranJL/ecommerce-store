import React, {useContext} from 'react';
import './directory.scss'
import {appContext} from '../../Context/context.js';
import MenuItem from './menu-item';

const Directory = () => {

  const {data} = useContext(appContext);

  return (
    <div className='directory-container'>
      {data.sections.map((item) => <MenuItem key={item.id} data={item} />)}
    </div>
  )
}

export default Directory;
