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

const BackgroundPreviewCard = ({ characterBackground }) => {
  const styles = useStyles();
  return (
    <div>
        <Paper gutterBottom>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <Typography>
                        {characterBackground.name}
                    </Typography>
                </Grid>
                <Grid item xs={4}>
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
