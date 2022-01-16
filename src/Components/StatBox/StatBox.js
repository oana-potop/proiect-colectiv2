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

const StatBox = ({ statName, statValue }) => {
  const styles = useStyles();
  return (
    <div>
      <div>
        <Container style={{borderWidth: "100px", backgroundColor: '#f73378'}}>
              <Typography align="center"><b>{statName}</b></Typography>
              <Typography align="center">{statValue}</Typography>
        </Container>
      </div>
    </div>
  );
};

export default StatBox;
