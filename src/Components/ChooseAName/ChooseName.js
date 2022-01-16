import React from "react";
import { Container, TextField, Button } from "@mui/material";

const ChooseName = ({ changeableName, action, step, setStep }) => {
  const [thing, setThing] = React.useState("");

  const handleChange = (event) => {
    setThing(event.target.value);
  };

  return (
    <Container>
      <TextField
        id="outlines-basic"
        label="name"
        variant="outlined"
        type="text"
        fullWidth
        margin="normal"
        autoFocus
        required
        onChange={(e) => {
          setThing(e.target.value);
        }}
      />
      <Button
        onClick={(e) => {
          action(thing);
          console.log("thing: ", thing);
          setStep(step + 1);
        }}
      >
        Next
      </Button>
    </Container>
  );
};

export default ChooseName;
