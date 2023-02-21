import React, { SyntheticEvent } from "react";
import { useState } from "react";
import Input from "./Input";
import SelectExc from "./SelectExc";
import {saveTraining, getTrainings } from "../libs/helpers";


function Form() {
  const [selected, setSelected] = useState<string>("push ups");
  const [inputValue, setInputValue] = useState<string>("");
  const [isInputError, setIsInputError] = useState<boolean>(false);

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    if(inputValue === ''){
      setIsInputError(true);
    }
    saveTraining({exercise:selected, times: +inputValue})
    console.log("selected excses: ", selected, "repetitions: ", inputValue);
    setSelected(selected);


    setInputValue("");
  }

  function handleSelect(e: React.ChangeEvent<HTMLSelectElement>): void {
    setSelected(e.target.value);
    console.log(e.target.value);
  }

  function handleInput(e: React.ChangeEvent<HTMLInputElement>): void {
    setInputValue(e.target.value);
    console.log(e.target.value);
    if(e.currentTarget.value !== ''){
      setIsInputError(false)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input isInputError={isInputError} handleInput={handleInput} inputValue={inputValue} />
      <SelectExc handleSelect={handleSelect} selected={selected} />
      <button disabled={isInputError} type="submit">Submit</button>
    </form>
  );
}

export default Form;
