import * as React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@mui/material/CardActions";
import {
  Avatar,
  CardMedia,
  Container,
  Grid,
  SvgIcon,
  Typography,
  Button,
} from "@material-ui/core";
import { useStyles } from "./styles";
import { CardActionArea } from "@mui/material";

const ClassPreviewCard = ({
  characterClass,
  changeableClass,
  action,
  step,
  setStep,
  classSavingThrows,
  setClassSavingThrows,
}) => {
  const styles = useStyles();
  let bonuses = [0,0,0,0,0,0]
  const addSavingThrows = () => {
    for(let i = 0; i < 2; i++){
      if(characterClass.savingThrows[i] === "Strength")
        bonuses[0] = 1;
      else if(characterClass.savingThrows[i] === "Dexterity")
      bonuses[1] = 1;
      else if(characterClass.savingThrows[i] === "Constitution")
        bonuses[2] = 1;
      else if(characterClass.savingThrows[i] === "Intelligence")
        bonuses[3] = 1;
      else if(characterClass.savingThrows[i] === "Wisdom")
        bonuses[4] = 1;
      else if(characterClass.savingThrows[i] === "Charisma")
        bonuses[5] = 1;
    }
    setClassSavingThrows(bonuses);
  }

  return (
    <div
      onClick={(event) => {
        action(characterClass);
        addSavingThrows();
        console.log(changeableClass);
        setStep(step + 1);

      }}
    >
      <div>
        <Card>
          <CardActionArea>
            <div>
              <CardHeader title={characterClass.name} className={styles.name} />
            </div>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={5}>
                  <Typography>
                    <b>Hit Die: </b> {characterClass.hitDie.minValue}d
                    {characterClass.hitDie.maxValue}
                  </Typography>
                  <Typography>
                    <b>Primary Ability: </b>{" "}
                    {characterClass.primaryAbility.map(
                      (element) => `${element} `
                    )}
                  </Typography>
                  <Typography>
                    <b>Saving Throws: </b>
                    {characterClass.savingThrows.map(
                      (element) => `${element} `
                    )}
                  </Typography>
                  <Typography>
                    <b>Casting potential: </b>
                    {characterClass.castingPotential}
                  </Typography>
                </Grid>
                <Grid item xs={7}>
                  <img src={characterClass.classImage} width="225" />
                </Grid>
              </Grid>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
};

export default ClassPreviewCard;
