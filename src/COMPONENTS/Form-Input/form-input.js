import React from 'react';
import './form-input.scss';

const FormInput = ({handleChange, label, ...rest}) => {

  return (
    <div className='group'>
      {
        label ? <label className={`${rest.value.length} ? 'shrink' : ''`}>{label} </label> : null
      }
      <input className='form-input' type={rest.type} onChange={handleChange} {...rest}/>
    </div>
  )

}

export default FormInput;
