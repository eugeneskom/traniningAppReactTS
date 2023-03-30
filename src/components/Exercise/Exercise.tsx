import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import { ExerciseProps } from "./types";


function Exercise({ exercise, onCompleteExercise}: ExerciseProps) {
  const {type,sets,reps,id,checked} = exercise;


  const labelId = `checkbox-list-label-${id}`;

  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <ListItem key={id} disablePadding>
        <ListItemButton role={undefined} onClick={()=> onCompleteExercise(id)} dense>
          <ListItemIcon>
            <Checkbox edge="start" checked={checked} tabIndex={-1} disableRipple inputProps={{ "aria-labelledby": labelId }} />
          </ListItemIcon>
          <ListItemText id={labelId} primary={type} />
          <ListItemText id={labelId} primary={sets} />
          <ListItemText id={labelId} primary={reps} />
        </ListItemButton>
      </ListItem>
    </List>
  );
}

export default Exercise;
