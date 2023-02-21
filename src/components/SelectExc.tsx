import React, { useState } from "react";

interface Props {
  handleSelect: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  selected: string
}

function SelectExc({ handleSelect,selected }:Props) {
  const [excercises, setExcercises] = useState<{ name: string }[]>([
    { name: "push ups" }, 
    { name: "squats" }, 
    { name: "shoulders push up" }
  ]);

  // setExcercises()

  return (
    <select name="exsercise" id="" value={selected} onChange={handleSelect}>
      {excercises.map((exc) => (
        <option key={exc.name} value={exc.name}>
          {exc.name}
        </option>
      ))}
    </select>
  );
}

export default SelectExc;
