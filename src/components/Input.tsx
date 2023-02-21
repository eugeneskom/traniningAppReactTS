import React, { useState } from 'react'

function Input({handleInput,inputValue,isInputError}:any) {

  return (
    <input 
    onChange={handleInput} 
    type="number" 
    name="number" 
    value={inputValue}
    className={`${isInputError ? 'error input' : ''}`}
    />
  )
}

export default Input