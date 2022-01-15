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

const ClassPreviewCard = ({ characterClass, changeableClass, action, step, setStep }) => {
  const styles = useStyles();
  return (
    <div onClick={event => {action(characterClass); console.log(changeableClass); setStep(step+1)}}>
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
