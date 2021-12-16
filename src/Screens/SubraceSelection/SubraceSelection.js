import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SubracePreviewCard from "../../Components/SubracePreviewCard/SubracePreviewCard";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { useHistory, useParams } from "react-router-dom";
import { Button, Typography } from "@material-ui/core";

const SubraceSelection = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const char1 = useSelector((state) => state.characterList[0]);
  const [subraces, setSubraces] = useState([]);
  const [races, setRaces] = useState([]);
  const [race, setRace] = useState();
  const { raceId } = useParams();

  useEffect(() => {
      console.log("pula");
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
  const renderSubraces = () => {
    return (

      <Grid container spacing={3}>
        {race.subraces?.map((element) => (
          <Grid item key={element.id} xs={12} md={6} lg={4}>
            <SubracePreviewCard characterSubrace={element} />
          </Grid>
        ))}
      </Grid>
    );
  };

  return (
    <Container style={{ marginTop: 20 }}>
      <Typography gutterBottom variant="h4" component="h4">
        Choose a subrace!
      </Typography>
      {setRace(races.filter((elem) => elem.id == raceId))}
      {/* {console.log(races)} */}
      {renderSubraces()}
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

export default SubraceSelection;
