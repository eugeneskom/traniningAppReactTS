import React, { useEffect, useContext, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { getTrainings } from "../libs/helpers";
import { AppContext } from "../App";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import Button from "@mui/material";

function History() {
  const { trainings, setTrainings } = useContext(AppContext);
  const [trainingsInHistory, setTrainingsInHistory] = useState<string[] | []>([]);
  const [filterOption, setFilterOption] = useState("");
  const [shownNumber, setShownNumber] = useState(5);

  function handleLoadMore(event: React.MouseEvent): void {
    setShownNumber((prev) => prev + 5);
  }

  // Getting unique exc that I have in the history to display them inside the filter select options
  function getListOfExcersises(): string[] | [] {
    const historyTrainings = getTrainings();
    if (historyTrainings) {
      const uniqueEx = new Set(historyTrainings?.map((training) => training.exercise));
      return [...Array.from(uniqueEx)];
    } else {
      return [];
    }
  }
  // getListOfExcersises();

  useEffect(() => {
    const selectExc = getListOfExcersises();
    setTrainingsInHistory(selectExc);
  }, []);

  useEffect(() => {
    if (trainingsInHistory.length > 0) {
      setFilterOption(trainingsInHistory[0]);
    }
  }, [trainingsInHistory]);

  const handleFilter = (e: SelectChangeEvent): void => {
    setFilterOption(e.target.value);
    const savedTrainings = getTrainings();
    const filteredTrainings = savedTrainings ? savedTrainings.filter((training) => training.exercise == e.target.value) : null;
    setTrainings(filteredTrainings);
  };

  return (
    <>
      <h1>History</h1>

      <h2>Filter</h2>
      <Select name="exercise" id="" value={filterOption} onChange={handleFilter}>
        {trainingsInHistory.map((exc) => (
          <MenuItem key={exc} value={exc}>
            {exc}
          </MenuItem>
        ))}
      </Select>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Training</TableCell>
              <TableCell align="right">Repetitions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {trainings?.slice(0, shownNumber).map((training) => (
              <TableRow key={Math.random()} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {training.exercise}
                </TableCell>
                <TableCell align="right">{training.times}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <button onClick={handleLoadMore}>Load more</button>
      </TableContainer>
    </>
  );
}

export default History;
