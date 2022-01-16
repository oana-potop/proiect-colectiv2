import * as React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import StatBox from "../StatBox/StatBox";
import {
  Avatar,
  Button,
  CardMedia,
  Container,
  SvgIcon,
  Typography,
  IconButton,
  CardActionArea,
  Grid,
} from "@material-ui/core";
import { DeleteOutlined } from "@mui/icons-material";
import { useStyles } from "./styles";
import { Rating } from "@mui/material";

const AtributeRating = ( {character} ) => {
    const [combatValue, setCombatValue] = useState(0);
    const [socialValue, setSocialValue] = useState(0);
    const [utilityValue, setUtilityValue] = useState(0);

  return (
    <div>
        <Typography>Combat: </Typography> 
        <Rating value={combatValue} readOnly/>
        <Typography>Social: </Typography> 
        <Rating value={socialValue} readOnly/>
        <Typography>Utility: </Typography> 
        <Rating value={utilityValue} readOnly/>
    </div>
  );
};

export default AtributeRating;
