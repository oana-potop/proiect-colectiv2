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
import RacialFeat from "./RacialFeat";

const RacePreviewCard = ({ characterRace }) => {
  const styles = useStyles();
  return (
    <div>
      <div>
        <Card>
            <div>
                  <CardHeader title={characterRace.name} className={styles.name} />
            </div>
            <CardContent>
                  <Typography>
                    <b>ASI: </b> {characterRace.increasedStats.map((stats) => (stats.stat)).map((stat) => `${stat} `)}
                  </Typography>
                  <Typography>
                    <b>Size: </b> {characterRace.size}
                  </Typography>
                  <Typography>
                    <b>Speed: </b> {characterRace.speed}
                  </Typography>
                  <Typography>
                    <b>Darkvision: </b>
                     {characterRace.darkvision ? characterRace.darkvision + " feet" : "no"}
                  </Typography>
                  <div>
                    {characterRace.extraFeats?.map((feat) => (feat.name)).map((featName) => RacialFeat(featName))}
                  </div>
                  {characterRace.subraces &&
                  <Typography>
                    <b>Subraces:</b>
                    {characterRace.subraces?.map((subrace) => ` ${subrace.name}`).toString()}
                  </Typography>}
            </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RacePreviewCard;
