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
import RacialFeat from "../RacePreviewCard/RacialFeat";

const SubracePreviewCard = ({ characterSubrace }) => {
  const styles = useStyles();
  return (
    <div>
      <div>
        <Card>
          <div>
            <CardHeader title={characterSubrace.name} className={styles.name} />
          </div>
          <CardContent>
            <Typography>
              <b>ASI: </b>{" "}
              {characterSubrace.increasedStats
                .map((stats) => stats.stat)
                .map((stat) => `${stat} `)}
            </Typography>
            {characterSubrace.speed && (
              <Typography>
                <b>Speed: </b> {characterSubrace.speed}
              </Typography>
            )}
            {characterSubrace.darkvision && (
              <Typography>
                <b>Darkvision: </b>
                {characterSubrace.darkvision}
              </Typography>
            )}
            <div>
              {characterSubrace.extraFeats
                ?.map((feat) => feat.name)
                .map((featName) => RacialFeat(featName))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SubracePreviewCard;
