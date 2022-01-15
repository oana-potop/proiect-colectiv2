import React from "react";
import { Container, TextField, Button } from "@mui/material";

const ChooseImage = ({ changeableImage, action, step, setStep }) => {
  const [thing, setThing] = React.useState(changeableImage);

  const handleChange = (event) => {
    setThing(event.target.value);
  };

  return (
    <Container>
        <img src={thing} width="225" />
        <TextField
            id="outlines-basic"
            label="Paste image url"
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
        Choose this image
      </Button>
    </Container>
  );
};

export default ChooseImage;
