
import React, { useEffect, useState } from 'react';

export default function InputBoxWithLabel({type, value:_value, id, label, isRequired, isAutoFocus, onChange}) {
  const [value, setValue] = useState(_value);

  useEffect(() => {
    setValue(_value)
  }, [_value])

  const handleOnChange = (e) => {
    setValue(e.target.value);
    onChange(e.target.value);
  }

  return <>
    <label htmlFor={id} className='form-label'>{label.toUpperCase().replace('_',' ')}</label>
    <input value={value} type={type} id={id} className='form-control' required={isRequired} autoFocus={isAutoFocus} onChange={handleOnChange}/>
  </>;
}
