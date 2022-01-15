import React from "react";
import { Container, TextField, Button } from "@mui/material";

const ChooseProficiencies = ({ changeableImage, action, step, setStep }) => {
  const [proficienciesList, setProficienciesList] = useState([]);
  const [prof1, setProf1] = useState(false);
  const [prof2, setProf2] = useState(false);
  const [prof3, setProf3] = useState(false);

  const handleChange = (event) => {
    setThing(event.target.value);
  };

  return (
    <Container>
      <Button
        variant="outlined"
        style={{ marginLeft: "20px", marginRight: "20px" }}
        onClick={(e) => {
          setProf1(!prof1);
        }}
      >
        Prof1
      </Button>
      <Button
        variant="outlined"
        style={{ marginLeft: "20px", marginRight: "20px" }}
        onClick={(e) => {
            setProf2(!prof2);
        }}
      >
        Prof2
      </Button>
      <Button
        variant="outlined"
        style={{ marginLeft: "20px", marginRight: "20px" }}
        onClick={(e) => {
            setProf3(!prof3);
        }}
      >
        Prof3
      </Button>
    </Container>
  );
};

export default ChooseProficiencies;
