import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import RacePreviewCard from "../../Components/RacePreviewCard/RacePreviewCard";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { useHistory } from "react-router-dom";
import { Button, Typography } from "@material-ui/core";

const RaceSelection = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const char1 = useSelector((state) => state.characterList[0]);
  const [races, setRaces] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/races", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((myJson) => {
        setRaces(myJson);
        
      });
  }, []);

  console.log(races);
  const renderRaces = () => {
    return (
      <Grid container spacing={3}>
        {races.map((element) => (
          <Grid item key={element.id} xs={12} md={6} lg={4}>
            <RacePreviewCard characterRace={element} />
          </Grid>
        ))}
      </Grid>
    );
  };

  return (
    <Container style={{ marginTop: 20 }}>
      <Typography gutterBottom variant="h4" component="h4">
        Choose a race!
      </Typography>
      {renderRaces()}
      <Button
        onClick={() => {
          history.push("/");
        }}
      >
        Go back
      </Button>
    </Container>
  );
};

export default RaceSelection;
