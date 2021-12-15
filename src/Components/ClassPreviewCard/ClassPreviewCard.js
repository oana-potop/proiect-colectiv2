import * as React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import {
  Avatar,
  CardMedia,
  Container,
  Grid,
  SvgIcon,
  Typography,
} from "@material-ui/core";
import { useStyles } from "./styles";

const ClassPreviewCard = ({ characterClass }) => {
  const styles = useStyles();
  return (
    <div>
      <div>
        <Card>
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
                    {characterClass.primaryAbility.map((element) => `${element} `)}
                  </Typography>
                  <Typography>
                    <b>Saving Throws: </b>
                    {characterClass.savingThrows.map((element) => `${element} `)}
                  </Typography>
                  <Typography>
                    <b>Casting potential: </b>
                    {characterClass.castingPotential}
                  </Typography>
                </Grid>
                <Grid item xs={7}>
                  <img src={characterClass.classImage} width="225"/>
                </Grid>
              </Grid>
            </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ClassPreviewCard;
