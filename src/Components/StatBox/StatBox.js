import * as React from "react";
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
import Paper from '@mui/material/Paper';

const StatBox = ({ statName, statValue }) => {
  const styles = useStyles();
  return (
    <div>
      <div>
        <Paper style={{borderWidth: "100px", backgroundColor: '#e57373', width:"100px"}}>
            <Typography align="center"><b>{statName}</b></Typography>
            <Typography align="center">{statValue}</Typography>
        </Paper>
      </div>
    </div>
  );
};

export default StatBox;
