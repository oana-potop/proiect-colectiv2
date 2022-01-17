import React from "react";
import { Container, TextField, Button } from "@mui/material";

const ChooseLevel = ({ changeableLevel, action, step, setStep }) => {
  const [thing, setThing] = React.useState(1);

  const handleChange = (event) => {
    setThing(event.target.value);
  };

  return (
    <Container>
      <TextField
        id="outlines-basic"
        label="Level"
        variant="outlined"
        type="number"
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
          setStep(step + 1);
        }}
      >
        Next
      </Button>
    </Container>
  );
};

export default ChooseLevel;
