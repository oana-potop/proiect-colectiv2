import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Box,
  FormControl,
  FormLabel,
} from "@mui/material";
import { Checkbox, FormControlLabel } from "@mui/material";
import { FormGroup } from "@material-ui/core";
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const ChooseProficiencies = ({
  changeableSkills,
  skillNumber,
  backgroundSkills,
  action,
  step,
  setStep,
}) => {
  const [proficienciesList, setProficienciesList] = useState([]);

  const skillsToDisplay = changeableSkills.filter(element => backgroundSkills.includes(element) == false);

  const addToList = (e) => {
    let data = proficienciesList;
    data.push(e.target.value);
    setProficienciesList(data);
    console.log(proficienciesList);
  };

  const removeFromList = (e) => {
    let data = proficienciesList;
    data = data.filter((element) => element !== e.target.value);
    setProficienciesList(data);
    console.log(proficienciesList);
  };

  const renderSkills = () => {
    return (
      <Container>
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <FormControl>
            <FormLabel component="legend">Pick {skillNumber}</FormLabel>
            <FormGroup>
              {skillsToDisplay.map((element) => (
                <FormControlLabel
                  control={<Checkbox icon={<StarBorderIcon color="secondary" />} checkedIcon={<StarIcon color="secondary" />}  />}
                  label={element}
                  value={element}
                  onChange={(e) => {
                    e.target.checked ? addToList(e) : removeFromList(e);
                  }}
                />
              ))}
            </FormGroup>
          </FormControl>
        </Box>{" "}
        <Button
          onClick={(e) => {
            action(proficienciesList.concat(backgroundSkills));
            setStep(step + 1);
          }}
        >
          Next
        </Button>
      </Container>
    );
  };

  return <Container>{renderSkills()}</Container>;
};

export default ChooseProficiencies;
