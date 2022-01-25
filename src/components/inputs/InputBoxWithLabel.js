
import React from 'react';

export default function InputBoxWithLabel({type, id, label, isRequired, isAutoFocus, onChange}) {
  return <>
    <label htmlFor={id} className='form-label'>{label.toUpperCase().replace('_',' ')}</label>
    <input type={type} id={id} className='form-control' required={isRequired} autoFocus={isAutoFocus} onChange={onChange}/>
  </>;
}
