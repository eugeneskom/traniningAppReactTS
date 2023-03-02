import React, { SyntheticEvent } from "react";
import { useState,useContext } from "react";
import Input from "./Input";
import SelectExc from "./SelectExc";
import {saveTraining, getTrainings } from "../libs/helpers";
import { AppContext } from "../App";


function Form() {
  const {inputNumber, setInputNumber,isInputError, setIsInputError} = useContext(AppContext);

  const [selected, setSelected] = useState<string>("push ups");

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    if(inputNumber === 0){
      setIsInputError(true);
      return
    }
    saveTraining({exercise:selected, times: +inputNumber})
    console.log("selected excses: ", selected, "repetitions: ", inputNumber);
    setSelected(selected);


    setInputNumber(0);
  }

  function handleSelect(e: React.ChangeEvent<HTMLSelectElement>): void {
    setSelected(e.target.value);
    console.log(e.target.value);
  }


  return (
    <form onSubmit={handleSubmit}>
      <Input />
      <SelectExc handleSelect={handleSelect} selected={selected} />
      <button disabled={isInputError} type="submit">Submit</button>
    </form>
  );
}

export default Form;
