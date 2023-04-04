import React, { SyntheticEvent } from "react";
import { useState, useContext, useEffect } from "react";
import Input from "./Input";
import SelectExc from "./SelectExc";
import { saveTraining, getTrainings } from "../libs/helpers";
import { AppContext } from "../App";
import Button from "@mui/material/Button";
import { SelectChangeEvent } from "@mui/material";
import { Repetition } from "../types/types";
import axios from "axios";

function Form() {
  const { trainings, setTrainings, inputNumber, setInputNumber, isInputError, setIsInputError } = useContext(AppContext);

  const [selected, setSelected] = useState<string>("push ups");

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    if (inputNumber === "") {
      setIsInputError(true);
      return;
    }
    console.log(selected, inputNumber);
    const training: Repetition = { exercise: selected, times: +inputNumber };
    fetch('http://localhost:3001/api/training', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(training)
  })
    .then(response => {
      console.log(response);
      return response.json();
    })
    .then(data => {
      console.log(data);
      saveTraining(training);
      setTrainings(prevTrainings => {
        return prevTrainings ? [...prevTrainings, training] : [training];
      });
      setSelected(selected);
      setInputNumber("");
    })
    .catch(error => console.log(error));
  }

  function handleSelect(e: SelectChangeEvent): void {
    setSelected(e.target.value);
    console.log(e.target.value);
  }

  useEffect(() => {
    axios.get('http://localhost:3001/api/training')
    .then(data=> console.log(data))
  
    return () => {
      
    }
  }, [])
  

  return (
    <form onSubmit={handleSubmit} className="form">
      <Input  />
      <SelectExc handleSelect={handleSelect} selected={selected} />
      <Button size="large" variant="outlined" disabled={isInputError} type="submit">
        Submit
      </Button>
    </form>
  );
}

export default Form;
