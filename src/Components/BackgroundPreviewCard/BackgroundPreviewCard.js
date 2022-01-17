import * as React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import {
  Avatar,
  CardMedia,
  Container,
  Grid,
  Paper,
  SvgIcon,
  Typography,
} from "@material-ui/core";
import { useStyles } from "./styles";

const BackgroundPreviewCard = ({ characterBackground, changeableBackground, action, step, setStep }) => {
  const styles = useStyles();
  return (
    <div onClick={event => {action(characterBackground); console.log(changeableBackground); setStep(step+1)}}>
        <Paper gutterBottom>
            <Grid container spacing={2} style={{marginLeft: "2px"}}>
                <Grid item xs={4}>
                    <Typography>
                        {characterBackground.name}
                    </Typography>
                </Grid>
                <Grid item xs={4} style={{marginLeft: "-3px"}}>
                    <Typography>
                        {characterBackground.feat.name}
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography>
                        {characterBackground.skillProficiencies[0] + ", " + characterBackground.skillProficiencies[1]}
                    </Typography>
                </Grid>
            </Grid>
        </Paper>
    </div>
  );
};

export default BackgroundPreviewCard;
