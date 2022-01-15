import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BackgroundPreviewCard from "../../Components/BackgroundPreviewCard/BackgroundPreviewCard.js";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { useHistory } from "react-router-dom";
import { Button, Typography } from "@material-ui/core";

const BackgroundSelection = ({changeableBackground, action, step, setStep}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const char1 = useSelector((state) => state.characterList[0]);
  const [backgrounds, setBackgrounds] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/backgrounds", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((myJson) => {
        setBackgrounds(myJson);
      });
  }, []);

  console.log(backgrounds);
  const renderBackgrounds = () => {
    return (
      <div style={{marginBottom: 25}}>
        <Grid container spacing={2}>
          <Grid item xs={4} style={{marginBottom: 20}}>
            <Typography variant="h5">
              <b>Name</b>
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h5">
              <b>Feature</b>
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h5">
              <b>Skill Proficiencies</b>
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          {backgrounds.map((element) => (
            <Grid item key={element.name} xs={12}>
              <BackgroundPreviewCard characterBackground={element} changeableBackground={changeableBackground} action={action} step={step} setStep={setStep}/>
            </Grid>
          ))}
        </Grid>
      </div>
    );
  };

  return (
    <Container style={{ marginTop: 20 }}>
      {renderBackgrounds()}
    </Container>
  );
};

export default BackgroundSelection;
