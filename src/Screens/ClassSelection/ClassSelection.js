import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ClassPreviewCard from "../../Components/ClassPreviewCard/ClassPreviewCard";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { useHistory } from "react-router-dom";
import { Button, Typography } from "@material-ui/core";

const ClassSelection = ({changeableClass, action, step, setStep, classSavingThrows, setClassSavingThrows}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const char1 = useSelector((state) => state.characterList[0]);
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/classes", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((myJson) => {
        setClasses(myJson);
      });
  }, []);

  console.log(classes);
  const renderClasses = () => {
    return (
      <Grid container spacing={3}>
        {classes.map((element) => (
          <Grid item key={element.id} xs={12} md={6} lg={4}>
            <ClassPreviewCard characterClass={element} changeableClass={changeableClass} action={action} step={step} setStep={setStep} classSavingThrows={classSavingThrows} setClassSavingThrows={setClassSavingThrows}/>
          </Grid>
        ))}
      </Grid>
    );
  };

  return (
    <Container style={{ marginTop: 20 }}>
      <Typography gutterBottom variant="h4" component="h4">
        Choose a class!
      </Typography>
      {renderClasses()}
    </Container>
  );
};

export default ClassSelection;
