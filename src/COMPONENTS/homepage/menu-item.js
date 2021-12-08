import React from 'react';
import {useHistory} from 'react-router-dom';
import './menu-item.scss'

const MenuItem = (props) => {

  const history = useHistory();

  return (
    <div className={`${props.data.size} menu-item`} onClick={() => history.push(props.data.linkUrl)}>
      <div className='background-image' style={{backgroundImage: `url(${props.data.imageUrl})`}}/>

      <div className='content'>
        <h1 className='title'>{props.data.title.toUpperCase()}</h1>
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </div>
  )
}

export default MenuItem;
